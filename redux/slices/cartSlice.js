import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react';

const initialState = {
    value: [],
  }
  export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addtocart: (state,action) => {
        
       console.log("addtocart called")
       console.log(action);
       var record=[...state.value,action.payload]
       state.value=record;
      },
      removefromcart: (state) => {
      console.log("remove cart")
      },
      
    },
  })

  export const { addtocart, removefromcart } = cartSlice.actions

export default cartSlice.reducer