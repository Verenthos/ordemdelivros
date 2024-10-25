import React from 'react';
import BookItem from './BookItem';
import '../styles/BookList.css';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;