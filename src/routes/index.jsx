import React from 'react';
import { Switch, Route } from 'react-router';
import { LoginPage, NotFound, User, Drinks, Explore, Home } from '../pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ LoginPage } />
      <Route exact path="/comidas" component={ Home } />
      <Route exact path="/bebidas" render={ (props) => <Drinks { ...props } /> } />
      <Route
        exact
        path="/explorar"
        render={ (props) => <Explore { ...props } /> }
      />
      <Route exact path="/perfil" render={ (props) => <User { ...props } /> } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
