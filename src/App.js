import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import MainRecipesScreen from './Pages/MainRecipesScreen';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ MainRecipesScreen } />
        <Route exact path="/perfil" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
