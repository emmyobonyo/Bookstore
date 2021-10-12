import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'Fiction', label: 'Fiction' },
  { value: 'Non-fiction', label: 'Non-fiction' },
  { value: 'Self-help', label: 'Self-help' },
];

function AddNewBook() {
  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Book Title" />
        <Select options={options} />
      </form>
    </div>
  );
}

export default AddNewBook;
