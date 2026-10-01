import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import type { CartItem } from './Models/Cartitem'
import Cart from './Pages/Cart'
import Item from './Pages/Item'
import Shop from './Pages/Shop'
import Layout from './Components/Layout'
import { addItem } from './redux/cartSlice'
import type { AppDispatch } from './redux/store'
import './App.css'

function Home() {
  return <h1>Home</h1>
}

function NotFound() {
  return <h1>Page not found</h1>
}

function App() {
  const dispatch = useDispatch<AppDispatch>()

  function handleAddToCart(item: CartItem) {
    dispatch(addItem(item))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop onAddToCart={handleAddToCart} />} />
          <Route path="shop/:id" element={<Item onAddToCart={handleAddToCart} />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
