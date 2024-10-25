import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import SeriesPage from './pages/SeriesPage';
import AuthorPage from './pages/AuthorPage';
import BookPage from './pages/BookPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/busca" element={<SearchResultsPage />} />
          <Route path="/series/:id" element={<SeriesPage />} />
          <Route path="/autores/:id" element={<AuthorPage />} />
          <Route path="/livros/:id" element={<BookPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;