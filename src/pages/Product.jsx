import { useLocation } from 'react-router-dom';
import React from "react";

const Product = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const products = [
    {
      title: `${product.name}`,
      price: "₹9,999",
      seller: "Amazon",
      discount:'50% Discount',
      delivery:'Free Delivery',
      sellerLogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    },
    {
      title: `${product.name}`,
      price: "₹8,999",
      delivery:'Free Delivery',
      discount:'45% Discount',
      seller: "JioMart",
      sellerLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/JioMart_logo.svg/1200px-JioMart_logo.svg.png",
    },
    {
      title: `${product.name}`,
      price: "₹8,599",
      seller: "Flipkart",
      discount:'40% Discount',
      delivery:'Free Delivery',
      sellerLogo: "https://images.seeklogo.com/logo-png/38/1/medical-company-logo-png_seeklogo-387545.png",
    },
    {
      title: `${product.name}`,
      price: "₹7,999",
      seller: "Reliance Digital",
      discount:'37% Discount',
      delivery:'Free Delivery',
      sellerLogo: "https://www.thestatesman.com/wp-content/uploads/2021/05/RIL_Reliance_IANS_ED.jpg",
    },
    {
      title: `${product.name}`,
      price: "₹10,999",
      seller: "LG",
      discount:'35% Discount',
      delivery:'Free Delivery',
      sellerLogo: "https://e7.pngegg.com/pngimages/620/276/png-clipart-lg-logo-lg-v20-lg-electronics-logo-lg-corp-lg-logo-television-text-thumbnail.png",
    },
    {
      title: `${product.name}`,
      price: "₹11,999",
      seller: "SunFlame",
      discount:'30% Discount',
      delivery:'Free Delivery',
      sellerLogo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0022/3632/brand.gif?itok=-GBQhFCC",
    },
  ];
  if (!product) {
    return <p className="text-center text-gray-500 mt-4">No product details available</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen" style={{ background: 'radial-gradient(circle, blue, beige)' }}>
      <div className="p-6 bg-white shadow-lg shadow-blue-200 rounded-lg border border-gray-500">
        <div className="flex flex-row">
          <div className="w-[300px] h-64">
            <img src={product.img} alt={product.name} className="w-full h-64 object-cover border border-black rounded-lg" />
          </div>
          <div className="ml-12">
            <h1 className="text-[40px] font-semibold mb-4">{product.name}</h1>
            <p className="text-lg mb-2">⭐ {product.reviews}/5</p>
            <p className="text-lg mb-2">🏷️ {product.discount}</p>
            <p className="text-lg mb-2 text-gray-500">📦 {product.delivery}</p>
            <p className="text-lg mt-4 font-bold text-[46px]">{product.price}</p>
          </div>
          <div>
            <img src={product.icon} className='w-[96%] h-28 mt-[65px] object-cover rounded-full ml-7 mr-8' />
            <button className="flex items-center bg-orange-200 ml-[80px] mt-4 text-orange-700 px-4 py-2 rounded-md hover:bg-orange-300">
              Buy →
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 w-[1200px] md:grid-cols-2 gap-4 p-6">
        {products.map((product, index) => (
          <div key={index}
            className="flex items-center border rounded-lg p-4 shadow-blue-200 hover:bg-green-200 shadow-md active:bg-green-300 cursor-pointer bg-white">
            <img src={product.sellerLogo} alt={product.seller} className="w-12 h-12 rounded-full mr-4"/>
            <div className="flex-grow">
              <p className="text-gray-500">
                <span className="font-bold text-black">{product.price}+(GST)</span> <span className="text-lg font-semibold ml-8 text-black mb-2">🏷️{product.discount}</span> 
              </p>
              <span className="text-lg text-black mb-2">📦 {product.delivery}</span>
            </div>
            <button className="flex items-center bg-orange-200 text-orange-700 px-4 py-2 rounded-md hover:bg-orange-300">
              Buy →
            </button>
          </div>
        ))}
      </div>
    </div>

  );
};
export default Product;
