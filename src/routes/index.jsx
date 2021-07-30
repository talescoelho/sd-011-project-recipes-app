import React from 'react';
import { Switch, Route } from 'react-router';
import { Home, LoginPage, NotFound } from '../pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ LoginPage } />
      <Route exact path="/comidas" component={ Home } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
