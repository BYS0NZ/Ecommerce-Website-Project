import { HomePage } from './pages/home/HomePage'
import { Routes, Route } from 'react-router'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchAppDATA = async () => {
      const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    }
    fetchAppDATA();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App
