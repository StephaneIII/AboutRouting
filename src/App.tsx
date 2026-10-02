import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import type { CartItem } from './Models/Cartitem'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Item from './Pages/Item'
import Shop from './Pages/Shop'
import Layout from './Components/Layout'
import { addItem } from './redux/cartSlice'
import { buyLemons, sellLemonade } from './redux/profitSlice'
import type { AppDispatch, RootState } from './redux/store'
import './App.css'

function Home() {
  const dispatch = useDispatch<AppDispatch>()
  const profit = useSelector((state: RootState) => state.profit.amount)

  return (
    <section>
      <h1>Lemonade Stand</h1>
      <p>Current profit: ${profit}</p>
      <button type="button" onClick={() => dispatch(sellLemonade())}>
        Sell Lemonade (+$5)
      </button>{' '}
      <button type="button" onClick={() => dispatch(buyLemons())}>
        Buy Lemons (-$2)
      </button>
    </section>
  )
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
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
