// src/App.js

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Categories from './components/Categories';
import store from './redux/store';
import './App.css';
import Button from './components/Button';
import { fetchBooks, addBook, removeBook } from './redux/books/booksSlice';
import AddBookForm from './components/addBookForm';

function App() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.data);
  const booksStatus = useSelector((state) => state.books.status);

  useEffect(() => {
    if (booksStatus === 'idle') {
      dispatch(fetchBooks());
    }
  }, [dispatch, booksStatus]);

  const handleAddBook = () => {
    const newBook = {
      title: 'New Book',
      author: 'Unknown',
    };
    dispatch(addBook(newBook));
  };

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={(
                <>
                  {booksStatus === 'loading' ? (
                    <div>Loading...</div>
                  ) : (
                    <>
                      <BookList books={books} onRemove={handleRemoveBook} />
                      <AddBookForm />
                    </>
                  )}
                </>
              )}
            />
            <Route path="/categories" element={<Categories />} />
          </Routes>
          <Button onClick={handleAddBook} label="Add New Book" />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
