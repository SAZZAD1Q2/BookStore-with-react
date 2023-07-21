import React from 'react';
import Books from './listBook';
import AddBook from './addBook';

function showBook() {
  return (
    <>
      <div>
        <Books />
        <AddBook />
      </div>
    </>
  );
}

export default showBook;
