import { Route, BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';
import Login from './Pages/Login';
import MainRecipesScreen from './Pages/MainRecipesScreen';
import Profile from './Pages/Profile';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ MainRecipesScreen } />
        <Route exact path="/perfil" component={ Profile } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
