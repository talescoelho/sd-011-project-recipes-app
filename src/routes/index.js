import React from 'react';
import { Switch, Route } from 'react-router';
import Login from '../pages/Login';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Comidas } />
    </Switch>
  );
}

export default Routes;
