import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Ordem de Livros</Link>
      </div>
      <nav className="navigation">
        <ul>
          <li><Link to="/autores">Autores</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;