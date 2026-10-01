import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { CartItem } from '../Models/Cartitem'

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(({ id }) => id === action.payload.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    incrementQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find(({ id }) => id === action.payload)
      if (item) item.quantity += 1
    },
    decrementQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find(({ id }) => id === action.payload)
      if (item && item.quantity > 1) item.quantity -= 1
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(({ id }) => id !== action.payload)
    },
  },
})

export const { addItem, decrementQuantity, incrementQuantity, removeItem } =
  cartSlice.actions
export default cartSlice.reducer