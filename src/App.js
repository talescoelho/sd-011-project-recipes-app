import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './context/Provider';
import Login from './pages/Login';
import RecipesDrinks from './pages/RecipesDrinks';
import RecipesFood from './pages/RecipesFood';
import ToExplore from './pages/ToExplore';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ RecipesFood } />
        <Route exact path="/bebidas" component={ RecipesDrinks } />
        <Route exact path="/explorar" component={ ToExplore } />
      </Switch>
    </Provider>
  );
}

export default App;
