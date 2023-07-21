// BookList.js

import React from 'react';
import { useSelector } from 'react-redux';

const BookList = () => {
  const books = useSelector((state) => state.books.data); // Assuming

  // Handle case where books data is not available or empty
  if (!books || books.length === 0) {
    return <div>No books available</div>;
  }

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title}
          {' '}
          -
          {book.author}
        </li>
      ))}
    </ul>
  );
};

export default BookList;
