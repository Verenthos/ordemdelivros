import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import BookList from '../components/BookList';
import '../styles/SearchResultsPage.css';

const SearchResultsPage = () => {
  const [books, setBooks] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('termo');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`/api/search?termo=${searchTerm}`);
        setBooks(response.data);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    };

    fetchBooks();
  }, [searchTerm]);

  return (
    <div className="search-results-page">
      <h2>Resultados da busca para: {searchTerm}</h2>
      {books.length > 0 ? (
        <BookList books={books} />
      ) : (
        <p>Nenhum livro encontrado.</p>
      )}
    </div>
  );
};

export default SearchResultsPage;