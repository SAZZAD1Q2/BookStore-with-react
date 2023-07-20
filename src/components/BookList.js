import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.item_id}
          itemId={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
          onRemove={handleRemoveBook}
        />
      ))}
    </div>
  );
};

export default BookList;
