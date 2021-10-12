import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../../redux/books/books'

function AddNewBook() {
  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Book Title" />
        <inout type="text" placeholder="Author"/>
      </form>
    </div>
  );
}

export default AddNewBook;
