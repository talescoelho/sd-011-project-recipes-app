import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Login } />
        <Route exact path="/bebidas" component={ Login } />
        <Route exact path="/comidas/:id:" component={ Login } />
        <Route exact path="/bebidas/:id" component={ Login } />
        <Route exact path="/comidas/:id/in-progress" component={ Login } />
        <Route exact path="/bebidas/:id/in-progress" component={ Login } />
        <Route exact path="/explorar" component={ Login } />
        <Route exact path="/explorar/comidas" component={ Login } />
        <Route exact path="/explorar/bebidas" component={ Login } />
        <Route exact path="/explorar/comidas/ingredientes" component={ Login } />
        <Route exact path="/explorar/bebidas/ingredientes" component={ Login } />
        <Route exact path="/explorar/comidas/area" component={ Login } />
        <Route exact path="/explorar/perfil" component={ Login } />
        <Route exact path="/receitas-feitas" component={ Login } />
        <Route exact path="/receitas-favoritas" component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
