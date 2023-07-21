// src/components/YourComponent.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, addBook, removeBook } from '../redux/booksSlice';

const YourComponent = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleAddBook = () => {
    const newBook = { title: 'New Book', author: 'Unknown' }; // Replace with your book details
    dispatch(addBook(newBook));
  };

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div>
      {/* Render your books list here */}
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}
            {' '}
            -
            {book.author}
            <button onClick={() => handleRemoveBook(book.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default YourComponent;
