import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default function Routes() {
  return (
    <Switch>
      <Route to="/" component={ Login } />
      <Route to="/comidas" component={ Foods } />
      <Route to="/bebidas" component={ Cocktails } />
      <Route to="/comidas/:id" component={ Details } />
      <Route to="/bebidas/:id" component={ Details } />
      <Route to="/explorar" component={ Explore } />
      <Route to="/explorar/comidas" component={ ExploreFoods } />
      <Route to="/explorar/bebidas" component={ ExploreCocktails } />
      <Route to="/explorar/comidas/ingredientes" component={  } />
      <Route to="/explorar/bebidas/ingredientes" component={  } />
      <Route to="/explorar/comidas/area" component={  } />
      <Route to="/perfil" component={ Profile } />
      <Route to="/receitas-feitas" component={  } />
      <Route to="/receitas-favoritas" component={  } />
    </Switch>
  );
}
