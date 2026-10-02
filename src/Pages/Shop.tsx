import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCocktails } from '../Controllers/CoctailController'
import type { CartItem } from '../Models/Cartitem'

interface ShopProps {
  onAddToCart: (item: CartItem) => void
}

function Shop({ onAddToCart }: ShopProps) {
  const [items, setItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllCocktails()
      .then(setItems)
      .catch(() => setItems([]))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <section>
      <h1>Welcome to the shop</h1>
      {items.map((item) => (
        <article key={item.id}>
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.name} width={150} />
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