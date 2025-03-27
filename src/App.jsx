import './App.css'
// Pages
import Chat from './pages/Chat'
import Landing from './pages/Landing'
import Product from './pages/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Routing

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/product/:name' element={<Product />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
