import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Homepage from './pages/Homepage.jsx'
import Checkout from './pages/Checkout.jsx' 
import OrderPage from './pages/OrderPage.jsx'
import TrackingPage from './pages/TrackingPage.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
            .then(response => setProducts(response.data))

        axios.get('/api/cart-items?expand=product')
            .then(response => setCartItems(response.data))
    }, [])
  return (
    <Routes>
      <Route index element={<Homepage products={products} cartItems={cartItems}/>} />
      <Route path="/checkout" element={<Checkout cartItems={cartItems}/>} /> 
      <Route path="/orders" element={<OrderPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
    </Routes>
  )
}

export default App