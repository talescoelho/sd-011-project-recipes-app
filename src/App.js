import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Drinks from './pages/Drinks/Drinks';
import Explore from './pages/Explore/Explore';
import Foods from './pages/Foods/Foods';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/bebidas" component={ Drinks } />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/comidas" component={ Foods } />
        <Route exact path="/perfil" component={ Profile } />
      </Switch>
    </div>
  );
}
export default App;
