/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { fetchBooks } from '../redux/books/booksSlice';

function Books() {
  const dispatch = useDispatch();
  const { bookItems, isLoading, error } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        ERROR:
        {' '}
        {error}
      </div>
    );
  }
  return (
    <ul>

      {
      Object.entries(bookItems).map(([itemId, books]) => (
        <div key={itemId}>
          {books.map((book) => (
            <BookItem key={itemId} book={book} itemId={itemId} />
          ))}
        </div>
      ))
}
    </ul>
  );
}

export default Books;
