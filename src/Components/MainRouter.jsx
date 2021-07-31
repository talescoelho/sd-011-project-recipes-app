import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Foods from '../Pages/Foods';
import Drinks from '../Pages/Drinks';

const MainRouter = () => (
  <Switch>
    <Route exact path="/comidas" component={ Foods } />
    <Route exact path="/bebidas" component={ Drinks } />
  </Switch>
);

export default MainRouter;
