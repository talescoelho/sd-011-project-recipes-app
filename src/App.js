import React from 'react';
import RecipesProvider from './context/RecipesProvider';
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <RecipesProvider>
      <Routes />
    </RecipesProvider>
  );
}

export default App;
