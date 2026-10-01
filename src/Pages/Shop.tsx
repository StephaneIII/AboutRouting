import { Link } from 'react-router-dom'
import { shopItems } from '../Data/ShopItems'
import type { CartItem } from '../Models/Cartitem'

interface ShopProps {
  onAddToCart: (item: CartItem) => void
}

function Shop({ onAddToCart }: ShopProps) {
  return (
    <section>
      <h1>Welcome to the shop</h1>
      {shopItems.map((item) => (
        <article key={item.id}>
          <h2>{item.name}</h2>
          <p>${item.price.toFixed(2)}</p>
          <Link to={`/shop/${item.id}`}>View details</Link>
          <button type="button" onClick={() => onAddToCart(item)}>
            Add to cart
          </button>
        </article>
      ))}
    </section>
  )
}

export default Shop