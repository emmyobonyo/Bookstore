import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBooks } from '../../redux/books/getBooksSlice';
import postBook from '../../redux/books/postBookSlice';

function AddNewBook() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

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
