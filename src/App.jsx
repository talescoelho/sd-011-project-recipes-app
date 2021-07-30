import React from 'react';
import Routes from './routes';
import './App.css';
import ProviderSearch from './context/ProviderSearch';

function App() {
  return (
    <ProviderSearch>
      <Routes />
    </ProviderSearch>
  );
}

export default App;
