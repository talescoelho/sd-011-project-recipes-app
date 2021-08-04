import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Recipes from './components/Recipes';
import DetailsMeals from './components/DetailsMeals';
import DetailsDrink from './components/DetailsDrink';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Recipes } />
      <Route exact path="/Bebidas" component={ Recipes } />
      <Route path="/comidas/:id" component={ DetailsMeals } />
      <Route path="/bebidas/:id" component={ DetailsDrink } />
    </Switch>
  );
}
