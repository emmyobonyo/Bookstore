import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk } from '@reduxjs/toolkit';

export default () => createAsyncThunk(
  'books/postBook',
  async () => {
    const id = uuidv4();
    const title = document.getElementById('bookTitle').value;
    const category = document.getElementById('category').value;
    await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BhqzrQ20oG4ih4qjaX67/books/', {
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
  },
);
