import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { getBooks } from '../../redux/books/getBooksSlice';
import './AddNewBook.css';

function AddNewBook() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  },);

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
    const bookList = document.getElementById('book-list');
    const div = document.createElement('div');
    div.className = 'div-new';
    const div1 = document.createElement('div');
    div1.className = 'div-new-inner';
    const newTitle = document.createElement('h2');
    newTitle.innerHTML = document.getElementById('bookTitle').value;
    const newCategory = document.createElement('p');
    newCategory.innerHTML = document.getElementById('category').value;
    newCategory.className = 'category';
    const imageDiv = document.createElement('div');
    imageDiv.className = 'image-div';
    const image = document.createElement('img');
    image.src = 'https://i.stack.imgur.com/2UAyy.png';
    image.className = 'image-src';
    const div2 = document.createElement('div');
    const percentage = document.createElement('h2');
    percentage.innerText = '15%';
    const completed = document.createElement('p');
    completed.innerText = 'Completed';
    const div3 = document.createElement('div');
    div3.className = 'div-new-inner-button';
    const chapter = document.createElement('h5');
    chapter.innerText = 'CURRENT CHAPTER';
    const chapterNumber = document.createElement('p');
    chapterNumber.innerText = 'Chapter 7';
    const div4 = document.createElement('div');
    const commentButton = document.createElement('a');
    commentButton.className = 'new-link';
    commentButton.innerText = 'Comment';
    commentButton.type = 'button';
    const editButton = document.createElement('a');
    editButton.className = 'new-link';
    editButton.innerText = 'Edit';
    const chapterButton = document.createElement('button');
    chapterButton.innerText = 'UPDATE PROGRESS';
    chapterButton.className = 'chapterButton';
    const button = document.createElement('a');
    button.className = 'new-link';
    button.innerHTML = 'Remove';
    button.type = 'button';
    button.onclick = async function () {
      await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BhqzrQ20oG4ih4qjaX67/books/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ item_id: id }),
      });
      bookList.removeChild(div);
    };
    bookList.appendChild(div);
    div.appendChild(div1);
    div.appendChild(imageDiv);
    div.appendChild(div3);
    div1.appendChild(newTitle);
    div1.appendChild(newCategory);
    div1.appendChild(div4);
    div4.appendChild(commentButton);
    div4.appendChild(editButton);
    div4.appendChild(button);
    imageDiv.appendChild(image);
    imageDiv.appendChild(div2);
    div2.appendChild(percentage);
    div2.appendChild(completed);
    div3.appendChild(chapter);
    div3.appendChild(chapterNumber);
    div3.appendChild(chapterButton);
    document.getElementById('bookTitle').value = '';
    document.getElementById('category').value = '';
  };

  return (
    <div className="add-book-component">
      <div id="book-list" />
      <h3 className="book-list-heading">ADD NEW BOOK</h3>
      <form>
        <input id="bookTitle" type="text" placeholder="Book Title" />
        <input id="category" type="text" placeholder="Category" />
        <button id="button" type="button" onClick={postBook}>Add Book</button>
      </form>
    </div>
  );
}

export default AddNewBook;
