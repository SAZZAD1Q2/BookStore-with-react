import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Book = ({ title, author }) => (
  <div className="book">
    <h3>{title}</h3>
    <p>
      Written by
      {author}
    </p>
    <Button name="Remove" />
  </div>
);

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

Book.defaultProps = {
  title: 'Book Title',
  author: 'Unknown Author',
};

export default Book;
