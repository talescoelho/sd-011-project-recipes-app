import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Perfil from './components/Perfil';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/perfil" component={ Perfil } />
      </Switch>
      <Header />
      <div className="meals">
        <span className="logo">TRYBE</span>
        <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ rockGlass }
        >
          Glass
        </object>
      </div>
    </BrowserRouter>
  );
}

export default App;
