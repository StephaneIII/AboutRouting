import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import type { RootState } from '../redux/store'

function Layout() {
  const items = useSelector((state: RootState) => state.cart.items)
  const cartCount = items.reduce((count, item) => count + item.quantity, 0)

  return (
    <>
      <header>
        <nav aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>{' '}
          <NavLink to="/shop">Shop</NavLink>{' '}
          <NavLink to="/cart">Cart{cartCount > 0 ? ` (${cartCount})` : ''}</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout