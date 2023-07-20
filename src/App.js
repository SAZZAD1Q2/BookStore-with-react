// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Categories from './components/Categories';
import store from './redux/store';
import './App.css';
import Button from './components/Button';
import { addBook, removeBook } from './redux/books/booksSlice';

// Form component for adding new books
const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({ title: '', author: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: `item${new Date().getTime()}`, // Using timestamp as a temporary unique id
      title: formData.title,
      author: formData.author,
    };
    dispatch(addBook(newBook));
    setFormData({ title: '', author: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Book Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

function App() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleAddBook = () => {
    const newBook = {
      id: `item${new Date().getTime()}`, // Using timestamp as a temporary unique id
      title: 'New Book',
      author: 'Unknown',
    };
    dispatch(addBook(newBook));
  };

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
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
                  <BookList books={books} onRemove={handleRemoveBook} />
                  <Form />
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
