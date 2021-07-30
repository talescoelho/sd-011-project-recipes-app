import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/Login';
import TelaPrincipal from './pages/TelaPrincipal';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" render={ () => <TelaPrincipal type="meal" /> } />
        <Route path="/bebidas" render={ () => <TelaPrincipal type="cocktail" /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
