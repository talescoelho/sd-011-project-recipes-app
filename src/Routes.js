import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import DetailsRecipe from './pages/DetailsRecipe';
import Perfil from './components/Perfil';
import Explore from './pages/Explore';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Recipes } />
      <Route exact path="/Bebidas" component={ Recipes } />
      <Route path="/comidas/:id" component={ DetailsRecipe } />
      <Route path="/bebidas/:id" component={ DetailsRecipe } />
      <Route exact path="/perfil" component={ Perfil } />
      <Route exact path="/explorar" component={ Explore } />
      <Route path="/explorar/comidas" component={ Explore } />
      <Route path="/explorar/bebidas" component={ Explore } />
      <Route path="/explorar/comidas/ingredientes" component={ Explore } />
      <Route path="/explorar/bebidas/ingredientes" component={ Explore } />
    </Switch>
  );
}
