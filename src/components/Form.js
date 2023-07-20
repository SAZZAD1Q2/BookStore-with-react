// src/components/Form.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ title: '', author: '' });

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

export default Form;
