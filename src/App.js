import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Explorar from './pages/Explorar';
import Bebidas from './pages/Bebidas';
import Comidas from './pages/Comidas';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/comidas" component={ Comidas } />
        <Route path="/bebidas" component={ Bebidas } />
        <Route path="/explorar" component={ Explorar } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
