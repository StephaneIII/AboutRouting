import { Link, useParams } from 'react-router-dom'
import { shopItems } from '../Data/ShopItems'
import type { CartItem } from '../Models/Cartitem'

interface ItemProps {
  onAddToCart: (item: CartItem) => void
}

function Item({ onAddToCart }: ItemProps) {
  const { id } = useParams<{ id: string }>()
  const item = shopItems.find((shopItem) => shopItem.id === Number(id))

  if (!item) {
    return (
      <section>
        <h1>Item not found</h1>
        <Link to="/shop">Back to shop</Link>
      </section>
    )
  }

  return (
    <section>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>${item.price.toFixed(2)}</p>
      <button type="button" onClick={() => onAddToCart(item)}>
        Add to cart
      </button>
      <p>
        <Link to="/shop">Back to shop</Link>
      </p>
    </section>
  )
}

export default Item