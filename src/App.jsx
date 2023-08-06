// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe o componente "Routes"
import './App.css'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import AllSportsPage from './pages/AllSportsPage';
import SportDetailsPage from './pages/SportDetailsPage';
import { FavoritesProvider } from './contexts/FavoritesContext';
import FavoriteSportPage from './pages/FavoriteSportPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/allsports" element={<AllSportsPage />} />
        <Route path="/allsports/:id"  element={<SportDetailsPage />} />
        <Route path="/favorites" element={<FavoriteSportPage />} />
        <Route path='*' element={<h1>404 page</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
