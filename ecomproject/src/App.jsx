import './App.css'
import Homepage from './pages/Homepage.jsx'
import Checkout from './pages/Checkout.jsx' 
import OrderPage from './pages/OrderPage.jsx'
import TrackingPage from './pages/TrackingPage.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/checkout" element={<Checkout />} /> 
      <Route path="/orders" element={<OrderPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
    </Routes>
  )
}

export default App