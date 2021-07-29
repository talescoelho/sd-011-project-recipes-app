import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Drink from './pages/Drink';
import Foods from './pages/Foods';
import Explore from './pages/Explore';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas" component={ Foods } />
          <Route exact path="/bebidas" component={ Drink } />
          <Route exact path="/explore" component={ Explore } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
