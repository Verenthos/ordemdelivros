import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthorList.css';

const AuthorList = ({ authors }) => {
  return (
    <div className="author-list">
      {authors.map((author) => (
        <div key={author.id} className="author-item">
          <Link to={`/authors/${author.id}`}>{author.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default AuthorList;