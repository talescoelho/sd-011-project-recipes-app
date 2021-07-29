import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Profile from './pages/Profile';
import Cocktails from './pages/Cocktails';
import Details from './pages/Details';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreCocktails from './pages/ExploreCocktails';
import Ingredients from './pages/Ingredients';
import OriginLocal from './pages/OriginLocal';
import DoneRecipes from './pages/DoneRecipes';
import FavouriteRecipes from './pages/FavouriteRecipes';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Foods } />
      <Route exact path="/perfil" component={ Profile } />
      <Route exact path="/bebidas" component={ Cocktails } />
      <Route exact path="/comidas/:id" component={ Details } />
      <Route exact path="/bebidas/:id" component={ Details } />
      <Route exact path="/explorar" component={ Explore } />
      <Route exact path="/explorar/comidas" component={ ExploreFoods } />
      <Route exact path="/explorar/bebidas" component={ ExploreCocktails } />
      <Route exact path="/explorar/comidas/ingredientes" component={ Ingredients } />
      <Route exact path="/explorar/bebidas/ingredientes" component={ Ingredients } />
      <Route exact path="/explorar/comidas/area" component={ OriginLocal } />
      <Route exact path="/receitas-feitas" component={ DoneRecipes } />
      <Route exact path="/receitas-favoritas" component={ FavouriteRecipes } />
    </Switch>
  );
}
