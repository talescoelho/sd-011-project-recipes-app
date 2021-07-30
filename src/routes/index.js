import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Meals from '../pages/Meals';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Meals } />
    </Switch>
  );
}
