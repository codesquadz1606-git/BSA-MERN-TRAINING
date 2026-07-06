import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../Slicer/CountSlicer'

export const store = configureStore({
  reducer: {
    counter:counterSlice.reducer
  },
})