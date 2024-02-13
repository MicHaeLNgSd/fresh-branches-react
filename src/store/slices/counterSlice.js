import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    decrement (state, action) {
      state.count--
    },
    increment (state, action) {
      state.count++
    }
  }
})

const { reducer, actions } = counterSlice
export const { decrement, increment } = actions
export default reducer
