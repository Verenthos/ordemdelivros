import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const AuthorPage = () => {
  const [books, setBooks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get(`/authors/${id}/books`);
        setBooks(response.data);
      } catch (error) {
        console.error('Erro ao buscar os livros:', error);
      }
    };

    fetchBooks();
  }, [id]);

  return (
    <div>
      <h2>Livros do Autor</h2>
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <a href={`https://www.amazon.com/dp/${book.asin}/?tag=your-affiliate-id`} target="_blank" rel="noopener noreferrer" className="book-title">{book.title}</a>
            <span className="book-year">{book.publicationYear}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorPage;