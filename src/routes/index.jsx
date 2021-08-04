import React from 'react';
import { Switch, Route } from 'react-router';
import {
  LoginPage, NotFound, User, Bebidas, Explore, Comidas,
  FoodDetails, MealtIngredients,
  DrinkIngredients, ExploreFood, ExploreDrink, ExploreByPlace,
} from '../pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ LoginPage } />
      <Route exact path="/comidas" component={ Comidas } />
      <Route exact path="/bebidas" render={ (props) => <Bebidas { ...props } /> } />
      <Route exact path="/explorar/comidas" component={ ExploreFood } />
      <Route exact path="/explorar/bebidas" component={ ExploreDrink } />
      <Route exact path="/explorar/comidas/area" component={ ExploreByPlace } />
      <Route exact path="/explorar/bebidas/area" component={ NotFound } />
      <Route
        exact
        path="/comidas/:id"
        render={ (props) => <FoodDetails { ...props } /> }
      />
      <Route
        exact
        path="/explorar"
        render={ (props) => <Explore { ...props } /> }
      />
      <Route
        exact
        path="/explorar/comidas/ingredientes"
        render={ (props) => <MealtIngredients { ...props } /> }
      />
      <Route
        exact
        path="/explorar/bebidas/ingredientes"
        render={ (props) => <DrinkIngredients { ...props } /> }
      />
      <Route exact path="/perfil" render={ (props) => <User { ...props } /> } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
