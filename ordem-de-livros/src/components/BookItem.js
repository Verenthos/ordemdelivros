import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BookItem.css';

const BookItem = ({ book }) => {
  return (
    <div className="book-item">
      <img src={book.cover} alt={book.title} />
      <div className="book-details">
        <h3>{book.title}</h3>
        <p>Autor: {book.author}</p>
        <p>Ano de Publicação: {book.publicationYear}</p>
        <Link to={`/livro/${book.id}`} className="buy-button">
          Comprar na Amazon
        </Link>
      </div>
    </div>
  );
};

export default BookItem;