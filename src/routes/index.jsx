import React from 'react';
import { Switch, Route } from 'react-router';
<<<<<<< HEAD
import { LoginPage, NotFound, User,
  Bebidas, Explore, Comidas, FoodDetails } from '../pages';
=======
import {
  LoginPage,
  NotFound,
  User,
  Drinks,
  Explore,
  Home,
  FoodDetails,
  MealtIngredients,
  DrinkIngredients,
} from '../pages';
>>>>>>> dc273e3d873acdabafec02907a0ed885f57ddd18

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ LoginPage } />
      <Route exact path="/comidas" component={ Comidas } />
      <Route exact path="/bebidas" render={ (props) => <Bebidas { ...props } /> } />
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
