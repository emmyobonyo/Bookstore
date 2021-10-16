/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const reponse = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BhqzrQ20oG4ih4qjaX67/books');
    const data = await reponse.json();
    const newData = [];
    Object.keys(data).forEach((book) => {
      newData.push({
        id_item: book,
        title: data[book][0].title,
        category: data[book][0].category,
      });
      const bookList = document.getElementById('book-list');
      const div = document.createElement('div');
      div.className = 'div-new';
      const div1 = document.createElement('div');
      const title = document.createElement('h2');
      title.innerHTML = data[book][0].title;
      const category = document.createElement('p');
      category.innerHTML = data[book][0].category;
      category.className = 'category';
      const div2 = document.createElement('div');
      const percentage = document.createElement('h2');
      percentage.innerText = '67%';
      const completed = document.createElement('p');
      completed.innerText = 'Completed';
      const div3 = document.createElement('div');
      const chapter = document.createElement('h5');
      chapter.innerText = 'CURRENT CHAPTER';
      const chapterNumber = document.createElement('p');
      chapterNumber.innerText = 'Chapter 7';
      const chapterButton = document.createElement('button');
      chapterButton.innerText = 'UPDATE PROGRESS';
      const button = document.createElement('button');
      button.className = 'new-button';
      button.innerHTML = 'Remove';
      button.type = 'button';
      button.onclick = async function () {
        await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BhqzrQ20oG4ih4qjaX67/books/${book}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({ item_id: book }),
        });
        bookList.removeChild(div);
      };
      bookList.appendChild(div);
      div.appendChild(div1);
      div.appendChild(div2);
      div.appendChild(div3);
      div1.appendChild(title);
      div1.appendChild(category);
      div1.appendChild(button);
      div2.appendChild(percentage);
      div2.appendChild(completed);
      div3.appendChild(chapter);
      div3.appendChild(chapterNumber);
      div3.appendChild(chapterButton);
    });
  },
);

const getBooksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: null,
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.status = 'loading';
    },
    [getBooks.fulfilled]: (state, action) => {
      state.status = 'success';
      state.books = action.payload;
    },
    [getBooks.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default getBooksSlice.reducer;
