import React from 'react';
import { PropTypes } from 'prop-types';
import RemoveBookBtn from './RemoveButton';
import Completed from './Completed';
import Chapter from './Chapter';

function BookItem({ book, itemId }) {
  return (
    <>
      <div className="books">
        <div className="bookContainer">
          <div className="bookDescription">
            <p className="actionPare">{book.category}</p>
            <h4 className="bookTitle">{book.title}</h4>
            <span className="bookAuthor">{book.author}</span>
            <ul className="commentContainer">
              <li>Comment</li>
              |
              <RemoveBookBtn itemId={itemId} />
              |
              <li>Edit</li>
            </ul>
          </div>
          <Completed />
        </div>
        <Chapter />
      </div>
    </>
  );
}

export default BookItem;

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  itemId: PropTypes.string.isRequired,
};
