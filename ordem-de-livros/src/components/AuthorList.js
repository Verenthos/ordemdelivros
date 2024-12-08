import React from 'react';
import '../styles/AuthorList.css';

const AuthorList = ({ authors }) => {
  return (
    <div className="author-list">
      {authors.map((author, index) => (
        <div key={index} className="author-item">
          <h3>{author.name}</h3>
          <p>{author.bio}</p>
          <h4>Livros:</h4>
          <ul>
            {author.books.map((book, bookIndex) => (
              <li key={bookIndex}>
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  {book.title} ({book.year})
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AuthorList;