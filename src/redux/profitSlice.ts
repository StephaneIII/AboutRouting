import { createSlice } from '@reduxjs/toolkit'

interface ProfitState {
  amount: number
}

const initialState: ProfitState = {
  amount: 0,
}

const profitSlice = createSlice({
  name: 'profit',
  initialState,
  reducers: {
    sellLemonade(state) {
      state.amount += 5
    },
    buyLemons(state) {
      state.amount -= 2
    },
  },
})

export const { buyLemons, sellLemonade } = profitSlice.actions
export default profitSlice.reducer