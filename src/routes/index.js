import React from 'react';
import { Switch, Route } from 'react-router';
import Login from '../pages/Login';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default Routes;
