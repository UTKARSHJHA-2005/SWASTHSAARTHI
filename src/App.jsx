import './App.css'
import Chat from './pages/Chat'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Product from './pages/Product'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/product/:name' element={<Product />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
