// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    // Add other reducers if needed
  },
});

export default store;
