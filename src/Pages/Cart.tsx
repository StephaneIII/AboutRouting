import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { decrementQuantity, incrementQuantity, removeItem } from '../redux/cartSlice'
import type { AppDispatch, RootState } from '../redux/store'

function Cart() {
  const dispatch = useDispatch<AppDispatch>()
  const items = useSelector((state: RootState) => state.cart.items)
  const navigate = useNavigate()
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <section>
      <h1>Welcome to the cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <span>{item.name} - ${item.price.toFixed(2)} each </span>
                <button
                  type="button"
                  aria-label={`Decrease ${item.name} quantity`}
                  disabled={item.quantity <= 1}
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  -
                </button>{' '}
                <span aria-live="polite">{item.quantity}</span>{' '}
                <button
                  type="button"
                  aria-label={`Increase ${item.name} quantity`}
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  +
                </button>{' '}
                <button
                  type="button"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p>Total: ${total.toFixed(2)}</p>
        </>
      )}
      <button type="button" onClick={() => navigate('/shop')}>
        Continue shopping
      </button>
    </section>
  )
}

export default Cart