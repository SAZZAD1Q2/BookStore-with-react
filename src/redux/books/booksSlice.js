// src/redux/booksSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://your-bookstore-api-url'; // Replace with your Bookstore API URL

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`${apiUrl}/books`);
  return response.data;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post(`${apiUrl}/books`, book);
  return response.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  await axios.delete(`${apiUrl}/books/${bookId}`);
  return bookId;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.payload);
      });
  },
});

export default booksSlice.reducer;
