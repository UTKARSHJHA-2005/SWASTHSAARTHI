// import './App.css'
// // Pages
// import Chat from './pages/Chat'
// import Landing from './pages/Landing'
// import Product from './pages/Product'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Routing

// function App() {

//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path='/' element={<Landing />} />
//           <Route path='/chat' element={<Chat />} />
//           <Route path='/product/:name' element={<Product />} />
//         </Routes>
//       </Router>
//     </>
//   )
// }

// export default App
import { useEffect, useState } from "react";

export default function App() {
  const API_URL = "https://dummyjson.com/products?limit=20&skip=0";
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [customName, setCustomName] = useState("");
  const [customQty, setCustomQty] = useState("");

  // Fetch products
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // Map API response to our inventory structure
        setProducts(
          data.products.map((p) => ({
            id: p.id,
            name: p.title,
            stock: p.stock,
          }))
        );
        console.log(data);
      });
  }, []);

  // Search / filter
  useEffect(() => {
    if (search) {
      setFiltered(
        products.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFiltered(products);
    }
  }, [search, products]);

  // Add custom item
  const addItem = () => {
    if (customName && customQty) {
      setProducts([
        ...products,
        { id: Date.now(), name: customName, stock: Number(customQty) },
      ]);
      setCustomName("");
      setCustomQty("");
    }
  };

  // Delete item
  const deleteItem = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  // Update stock
  const updateStock = (id, value) => {
    setProducts(
      products.map((item) =>
        item.id === id ? { ...item, stock: value } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Inventory System
        </h1>

        {/* Search */}
        <div className="mb-4">
          <input
            className="w-full border px-3 py-2 rounded-lg"
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Add New Item */}
        <div className="flex gap-3 mb-4">
          <input
            className="border px-3 py-2 rounded-lg flex-1"
            placeholder="Item name"
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
          />
          <input
            className="border px-3 py-2 w-24 rounded-lg"
            type="number"
            placeholder="Qty"
            value={customQty}
            onChange={(e) => setCustomQty(e.target.value)}
          />
          <button
            onClick={addItem}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </div>

        {/* Inventory Table */}
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Item</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-3">{item.name}</td>
                <td className="p-3">
                  <input
                    type="number"
                    className="border rounded-lg px-2 py-1 w-20"
                    value={item.stock}
                    onChange={(e) =>
                      updateStock(item.id, Number(e.target.value))
                    }
                  />
                </td>
                <td className="p-3">
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="3" className="p-3 text-center text-gray-500">
                  No items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
