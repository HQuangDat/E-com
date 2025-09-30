import './App.css'
import Homepage from './pages/Homepage.jsx'
import Checkout from './pages/Checkout.jsx' // Import the Checkout component
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/checkout" element={<Checkout />} /> {/* Add the checkout route */}
    </Routes>
  )
}

export default App