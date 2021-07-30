import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Recipes from './components/Recipes';
import Perfil from './components/Perfil';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/comidas" component={ Recipes } />
      <Route exact path="/perfil" component={ Perfil } />
    </Switch>
  );
}
