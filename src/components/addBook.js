import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/booksSlice';

function BookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewBook({
      title,
      author,
      category: 'Fiction',
      item_id: `item${Math.floor(Math.random() * 1000)}`,
    }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Book Title"
        onChange={handleTitleChange}
      />
      <input
        type="text"
        value={author}
        placeholder="Author"
        onChange={handleAuthorChange}
      />
      <button type="submit">Add your book</button>
    </form>
  );
}

export default BookForm;
