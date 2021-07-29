import React from 'react';
import { Switch, Route } from 'react-router';
import { LoginPage, NotFound } from '../pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ <LoginPage /> } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
