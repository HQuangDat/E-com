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

      const fetchInitialData = async () => {
        let responseProducts = await axios.get('/api/products')
        setProducts(responseProducts.data)

        let responseCartItems = await axios.get('/api/cart-items?expand=product')
        setCartItems(responseCartItems.data)
      }

    useEffect(() => {
      fetchInitialData()
    }, [])
  return (
    <Routes>
      <Route index element={<Homepage products={products} cartItems={cartItems} fetchInitialData={fetchInitialData} />} />
      <Route path="/checkout" element={<Checkout cartItems={cartItems}/>} /> 
      <Route path="/orders" element={<OrderPage cartItems={cartItems}/>} />
      <Route path="/tracking" element={<TrackingPage />} />
    </Routes>
  )
}

export default App