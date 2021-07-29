import React from 'react';
import { Route, Switch } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" />
        <Route exact path="/comidas" />
        <Route exact path="/bebidas" />
        <Route exact path="/comidas/:id" />
        <Route exact path="/bebidas/:id" />
        <Route exact path="/comidas/:id/in-progress" />
        <Route exact path="/bebidas/:id/in-progress" />
        <Route exact path="/explorar" />
        <Route exact path="/explorar/comidas" />
        <Route exact path="/explorar/bebidas" />
        <Route exact path="/explorar/comidas/ingredientes" />
        <Route exact path="/explorar/bebidas/ingredientes" />
        <Route exact path="/explorar/comidas/area" />
        <Route exact path="/perfil" />
        <Route exact path="/receitas-feitas" />
        <Route exact path="/receitas-favoritas" />
      </Switch>
    );
  }
}

export default Routes;
