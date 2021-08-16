import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import InitialScreen from './pages/InitialScreen';
import Profile from './pages/Profile';
import Details from './pages/Details';
import Explore from './pages/Explore';
import ExploreDynamic from './pages/ExploreDynamic';
import SearchIngredients from './pages/SearchIngredients';
import OriginLocal from './pages/OriginLocal';
import DoneRecipes from './pages/DoneRecipes';
import FavouriteRecipes from './pages/FavouriteRecipes';
import NotFound from './pages/NotFound';

export default function Routes() {
  const drink = 'drink';
  const food = 'food';
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={ Login }
      />
      <Route
        exact
        path="/perfil"
        component={ Profile }
      />
      <Route
        exact
        path="/explorar"
        component={ Explore }
      />
      <Route
        exact
        path="/explorar/comidas/area"
        component={ OriginLocal }
      />
      <Route
        exact
        path="/receitas-feitas"
        component={ DoneRecipes }
      />
      <Route
        exact
        path="/receitas-favoritas"
        component={ FavouriteRecipes }
      />
      <Route
        exact
        path="/not-found"
        component={ NotFound }
      />
      <Route
        exact
        path="/comidas"
        render={ () => <InitialScreen title="Comidas" type={ food } /> }
      />
      <Route
        exact
        path="/bebidas"
        render={ () => <InitialScreen title="Bebidas" type={ drink } /> }
      />
      <Route
        exact
        path="/comidas/:id"
        render={ () => <Details type={ food } /> }
      />
      <Route
        exact
        path="/bebidas/:id"
        render={ () => <Details type={ drink } /> }
      />
      <Route
        exact
        path="/comidas/:id/:inProgress"
        render={ () => <Details type={ food } /> }
      />
      <Route
        exact
        path="/bebidas/:id/:inProgress"
        render={ () => <Details type={ drink } /> }
      />
      <Route
        exact
        path="/explorar/comidas"
        render={ () => (<ExploreDynamic title="Explorar Comidas" type={ food } />) }
      />
      <Route
        exact
        path="/explorar/bebidas"
        render={ () => (<ExploreDynamic title="Explorar Bebidas" type={ drink } />) }
      />
      <Route
        exact
        path="/explorar/comidas/ingredientes"
        render={ () => <SearchIngredients type={ food } /> }
      />
      <Route
        exact
        path="/explorar/bebidas/ingredientes"
        render={ () => <SearchIngredients type={ drink } /> }
      />
      <Redirect
        to="/not-found"
      />
    </Switch>
  );
}
