import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import MainProvider from './context/MainProvider';

function App() {
  return (
    <BrowserRouter>
      <MainProvider>
        <Routes />
      </MainProvider>
    </BrowserRouter>
  );
}

export default App;
