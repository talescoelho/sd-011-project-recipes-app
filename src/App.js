import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import HomeRecipe from './pages/HomeRecipe';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ HomeRecipe } />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
