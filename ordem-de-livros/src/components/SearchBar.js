import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Pesquisar..." />
      <button>Buscar</button>
    </div>
  );
};

export default SearchBar;