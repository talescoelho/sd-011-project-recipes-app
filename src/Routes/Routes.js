import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Pages/Login';
import HomeRecipes from '../Pages/HomeRecipes';
import Profile from '../Pages/Profile';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ HomeRecipes } />
        <Route exact path="/perfil" component={ Profile } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
