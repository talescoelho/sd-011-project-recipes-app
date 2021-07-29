import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Provider from './provider';
import Login from './pages/Login';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
