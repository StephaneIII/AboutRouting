import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../redux/cartSlice'
import type { AppDispatch, RootState } from '../redux/store'

function Checkout() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const items = useSelector((state: RootState) => state.cart.items)
  const [confirmed, setConfirmed] = useState(false)
  const totalCount = items.reduce((count, item) => count + item.quantity, 0)

  function handleConfirm() {
    dispatch(clearCart())
    setConfirmed(true)
  }

  if (confirmed) {
    return (
      <section>
        <h1>Order confirmed</h1>
        <p>Thank you for your order!</p>
        <Link to="/shop">Back to shop</Link>
      </section>
    )
  }

  if (items.length === 0) {
    return (
      <section>
        <h1>Checkout</h1>
        <p>Your cart is empty.</p>
        <Link to="/shop">Back to shop</Link>
      </section>
    )
  }

  return (
    <section>
      <h1>Checkout</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} width={64} height={64} />{' '}
            <span>
              {item.name} x {item.quantity}
            </span>
          </li>
        ))}
      </ul>
      <p>Total items: {totalCount}</p>
      <button type="button" onClick={() => navigate('/cart')}>
        Back to cart
      </button>{' '}
      <button type="button" onClick={handleConfirm}>
        Confirm order
      </button>
    </section>
  )
}

export default Checkout
