import React, { useEffect } from 'react';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// import { getBooks } from '../../redux/books/books';
import { getBooks } from '../../redux/books/getBooksSlice';

function AddNewBook() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const postBook = () => {
    const id = uuidv4();
    const title = document.getElementById('bookTitle').value;
    const category = document.getElementById('category').value;
    fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BhqzrQ20oG4ih4qjaX67/books/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ item_id: id, title, category }),
    })
      .then((res) => res);
    document.getElementById('bookTitle').value = '';
    document.getElementById('category').value = '';
    // dispatch(addBook({
    //   item_id: id,
    //   title,
    //   category,
    // }));
  };
  // getBook();

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <div id="book-list" />
      <form>
        <input id="bookTitle" type="text" placeholder="Book Title" />
        <input id="category" type="text" placeholder="Category" />
        <button type="button" onClick={postBook}>Add Book</button>
      </form>
    </div>
  );
}

export default AddNewBook;
