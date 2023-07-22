import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function RemoveBookBtn({ itemId }) {
  const dispatch = useDispatch();
  return (
    <>
      <button type="submit" className="remove" onClick={() => dispatch(removeBook(itemId))}>Remove</button>

    </>
  );
}

export default RemoveBookBtn;

RemoveBookBtn.propTypes = {
  itemId: PropTypes.string.isRequired,
};
