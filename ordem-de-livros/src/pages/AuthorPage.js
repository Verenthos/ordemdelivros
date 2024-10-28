import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/AuthorPage.css';
import authors from './AuthorsData.js';

const AuthorPage = () => {
  const { nome } = useParams();

  const author = authors[nome];

  if (!author) {
    return <div className="author-not-found">Autor não encontrado.</div>;
  }
  return (
    <div className="author-page">
      <h1>{author.name}</h1>
      <p>{author.bio}</p>
      <h2>Livros:</h2>
      <ul>
        {author.books.map((book, index) => (
          <li key={index}>
            <a href={book.link} target="_blank" rel="noopener noreferrer">
              {book.title} ({book.year})
            </a>
          </li>
        ))}
      </ul>
      <Link to="/" style={{ color: 'yellow' }}>Voltar para a página inicial</Link>
    </div>
  );
};

export default AuthorPage;