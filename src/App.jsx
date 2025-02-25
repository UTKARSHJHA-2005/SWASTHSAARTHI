import './App.css'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
