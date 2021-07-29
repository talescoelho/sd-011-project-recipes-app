import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Comidas from './Pages/Comidas';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Comidas } />
      <Route exact path="/bebidas" component={ Comidas } />
      <Route exact path="/comidas/:id" component={ Comidas } />
      <Route exact path="/bebidas/:id" component={ Comidas } />
      <Route exact path="/comidas/:id/in-progress" component={ Comidas } />
      <Route exact path="/bebidas/:id/in-progress" component={ Comidas } />
      <Route exact path="/explorar" component={ Comidas } />
      <Route exact path="/explorar/comidas" component={ Comidas } />
      <Route exact path="/explorar/bebidas" component={ Comidas } />
      <Route exact path="/explorar/bebidas/ingredientes" component={ Comidas } />
      <Route exact path="/explorar/comidas/ingredientes" component={ Comidas } />
      <Route exact path="/explorar/comidas/area" component={ Comidas } />
      <Route exact path="/perfil" component={ Comidas } />
      <Route exact path="/receitas-feitas" component={ Comidas } />
      <Route exact path="/receitas-favoritas" component={ Comidas } />
    </Switch>
  );
}

export default App;
