import {HomePage} from './pages/HomePage'
import {Routes, Route} from 'react-router'
import {CheckoutPage} from './pages/CheckoutPage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App
