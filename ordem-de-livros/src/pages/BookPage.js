import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/BookPage.css';

const BookPage = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/api/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Erro ao buscar o livro:', error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="book-page">
      <h2>{book.title}</h2>
      <p>Autor: {book.author}</p>
      <p>Ano de Publicação: {book.publicationYear}</p>
      <p>Descrição: {book.description}</p>
      <a href={book.amazonLink} target="_blank" rel="noopener noreferrer">Comprar na Amazon</a>
    </div>
  );
};

export default BookPage;