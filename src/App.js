import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import ProviderFood from './context/ProviderFood';
import ProviderDrink from './context/ProviderDrink';

function App() {
  return (
    <BrowserRouter>
      <ProviderDrink>
        <ProviderFood>
          <Routes />
        </ProviderFood>
      </ProviderDrink>
    </BrowserRouter>
  );
}

export default App;
