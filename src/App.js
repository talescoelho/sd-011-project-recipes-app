import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import MenuInferior from './components/MenuInferior';

function App() {
  return (
    <div className="meals">
      <Header />
      <Switch>
        <Route path="/comidas" component={ Comidas } />
      </Switch>
      <Login />
      <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
      <MenuInferior />
    </div>
  );
}

export default App;
