import React from 'react';
import { Switch, Route } from 'react-router';
import { LoginPage, Home, NotFound } from './pages';

function Routes() {
  return(
    <Switch>
      <Route exact path="/" component={ <LoginPage /> }/>
      <Route path="/home" component={ <Home />} />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;