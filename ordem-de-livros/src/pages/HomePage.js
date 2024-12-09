import React from 'react';
import SearchBar from '../components/SearchBar';
import '../styles/HomePage.css';
import bookshelfImage from '../assets/Bookshelf.png';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="background-image">
        <img src={bookshelfImage} alt="Bookshelf" />
      </div>
      <div className="content">
        <h1>Bem-vindo à Ordem de Livros</h1>
        <p>Confira a ordem da lançamento dos seus livros favoritos!</p>
      </div>
    </div>
  );
};
//


export default HomePage;