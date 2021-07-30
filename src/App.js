import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';
import Routes from './Routes';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <RecipesProvider>
        <Routes />
        <SearchBar />
      </RecipesProvider>
    </Router>
  );
}

export default App;
