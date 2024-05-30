import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './slices/cartSlice'


const mystore = configureStore({
  reducer: {
    cart:cartSlice
  },
})
export default mystore;