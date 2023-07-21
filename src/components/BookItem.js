import React from 'react';
import { PropTypes } from 'prop-types';
import RemoveBookBtn from './RemoveButton';

function BookItem({ book, itemId }) {
  return (
    <>
      <li>
        {book.title}
        <span>{book.author}</span>
        <RemoveBookBtn itemId={itemId} />
        <span>{itemId}</span>
      </li>
    </>
  );
}

export default BookItem;

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  itemId: PropTypes.string.isRequired,
};