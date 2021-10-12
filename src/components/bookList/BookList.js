import React from 'react';
import AddNewBook from '../addNewBook/AddNewBook';

function BookList() {
  return (
    <div>
      <h3>Home</h3>
      <p>Action</p>
      <p>The Power of Process</p>
      <p>Emmanuel Obonyo</p>
      <button type="button">Comment</button>
      <button type="button">Remove</button>
      <AddNewBook />
    </div>
  );
}

export default BookList;
