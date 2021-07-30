import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/bebidas" />
        <Route path="/comidas" />
        <Route path="/explorar" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
