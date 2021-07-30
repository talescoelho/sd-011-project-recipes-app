import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './helpers/Routes';
import LoginProvider from './context/LoginProvider';
import RecipesProvider from './context/RecipesProvider';

function App() {
  return (
    <LoginProvider>
      <RecipesProvider>
        <Routes />
      </RecipesProvider>
    </LoginProvider>
  );
}

export default App;
