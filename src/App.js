import React from 'react';
import RecipesProvider from './context/RecipesProvider';
import './style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';

function App() {
  return (
    <RecipesProvider>
      <Routes />
    </RecipesProvider>
  );
}

export default App;
