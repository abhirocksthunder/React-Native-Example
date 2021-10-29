/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import {configureStore} from '@reduxjs/toolkit';

import movieReducer from './moviesStore';
import productReducer from './productsStore';
import cartReducer from './cartStore';

export default configureStore({
  reducer: {
    movies: movieReducer,
    products: productReducer,
    cart: cartReducer,
  },
});
