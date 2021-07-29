import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Login } from './pages';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/perfil" />
      <Route exact path="/explorar" />
      <Route exact path="/comidas" component={ Home } />
      <Route exact path="/bebidas" />
      <Route exact path="/receitas-feitas" />
      <Route exact path="/receitas-favoritas" />
      <Route exact path="/explorar/comidas" />
      <Route exact path="/explorar/bebidas" />
      <Route exact path="/explorar/comidas/area" />
      <Route exact path="/comidas/:id-da-receitas" />
      <Route exact path="/bebidas/:id-da-receitas" />
      <Route exact path="/explorar/comidas/ingredientes" />
      <Route exact path="/explorar/bebidas/ingredientes" />
      <Route exact path="/comidas/:id-da-receitas/in-progress" />
      <Route exact path="/bebidas/:id-da-receitas/in-progress" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
