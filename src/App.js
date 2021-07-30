import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/Login';
import TelaPrincipalComidas from './pages/TelaPrincipalComidas';
import TelaPrincipalBebidas from './pages/TelaPrincipalBebidas';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ TelaPrincipalComidas } />
        <Route path="/bebidas" component={ TelaPrincipalBebidas } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
