import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCocktailById } from '../Controllers/CoctailController'
import type { CartItem } from '../Models/Cartitem'

interface ItemProps {
  onAddToCart: (item: CartItem) => void
}

function Item({ onAddToCart }: ItemProps) {
  const { id } = useParams<{ id: string }>()
  const [item, setItem] = useState<CartItem | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    getCocktailById(id)
      .then(setItem)
      .catch(() => setItem(null))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Loading...</p>

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
      <img src={item.image} alt={item.name} width={300} />
      <p>Category: {item.category}</p>
      <p>Glass: {item.glass}</p>
      <p>{item.instructions}</p>
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