// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';

const initialState = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
  preloadedState: {
    books: initialState,
  },
});

export default store;
