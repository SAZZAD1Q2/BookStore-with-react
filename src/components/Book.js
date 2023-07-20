import React from 'react';
import PropTypes from 'prop-types'; // Add this import

const Book = ({
  itemId, title, author, category, onRemove,
}) => (
  <div>
    <h3>{title}</h3>
    <p>
      Author:
      {author}
    </p>
    <p>
      Category:
      {category}
    </p>
    <button type="button" onClick={() => onRemove(itemId)}>Remove</button>
  </div>
);

// Add propTypes for the component props
Book.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Book;
