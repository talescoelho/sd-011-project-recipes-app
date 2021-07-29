import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import Explore from '../pages/Explore';
import Profile from '../pages/Profile';
import DoneRecipes from '../pages/DoneRecipes';
import FavoritesRecipes from '../pages/FavoritesRecipes';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Foods } />
        <Route exact path="/bebidas" component={ Drinks } />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/perfil" component={ Profile } />
        <Route exact path="/receitas-feitas" component={ DoneRecipes } />
        <Route exact path="/receitas-favoritas" component={ FavoritesRecipes } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
