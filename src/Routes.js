import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ MainPage } />
      <Route exact path="/bebidas" component={ MainPage } />
    </Switch>
  );
}

export default Routes;
