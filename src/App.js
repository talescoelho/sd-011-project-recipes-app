import { Route, BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';

// Pages Components \/
import Login from './Pages/Login';
import Foods from './Pages/Foods';
import Drinks from './Pages/Drinks';
import Profile from './Pages/Profile';
import Explore from './Pages/Explore';
// Pages Components /\

import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Foods } />
        <Route exact path="/bebidas" component={ Drinks } />
        <Route exact path="/perfil" component={ Profile } />
        <Route exact path="/explorar" component={ Explore } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
