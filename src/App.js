import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Comidas from './Pages/Comidas';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Comidas } />
    </Switch>
  );
}

export default App;
