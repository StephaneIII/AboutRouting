import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import profitReducer from './profitSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    profit: profitReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch