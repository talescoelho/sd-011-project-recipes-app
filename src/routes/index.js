import React from 'react';
import { Switch, Router } from 'react-router-dom';
import Login from '../pages/Login';
import Comidas from '../pages/Comidas';

export default function index() {
  return (
    <Switch>
      <Router exact path="/" component={ Login } />
      <Router exact path="/comidas" component={ Comidas } />
    </Switch>
  );
}
