import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Recipes from './components/Recipes';
import DetailsRecipe from './components/DetailsRecipe';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Recipes } />
      <Route exact path="/Bebidas" component={ Recipes } />
      <Route path="/comidas/:id" component={ DetailsRecipe } />
      <Route path="/bebidas/:id" component={ DetailsRecipe } />
    </Switch>
  );
}
