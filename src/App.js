import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Bebidas from './pages/Bebidas';
import Comidas from './pages/Comidas';
import Explorar from './pages/Explorar';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/bebidas" component={ Bebidas } />
      <Route exact path="/comidas" component={ Comidas } />
      <Route exact path="/explorar" component={ Explorar } />
    </Switch>
  );
}

export default App;
