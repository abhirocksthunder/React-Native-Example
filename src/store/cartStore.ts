/* eslint-disable comma-dangle */
/* eslint-disable keyword-spacing */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import {MovieData} from '../app/models/Movies';

interface cartList {
  cartItems: MovieData[];
}

const initialState = {
  cartItems: [],
} as cartList;

const cartSlicer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItems(state, action) {
      return {
        ...state,
        cartItems: action.payload,
      };
    },
    getCartItems(state) {
      return {
        ...state,
      };
    },
  },
});

export const cartActions = cartSlicer.actions;

export default cartSlicer.reducer;
