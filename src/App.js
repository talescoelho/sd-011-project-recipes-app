import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes/Routes';

function App() {
  return (
    <div className="meals">
      <span className="logo">TRYBE</span>
      <h2>APP de Receitas</h2>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
      <Routes />
    </div>
  );
}

export default App;
