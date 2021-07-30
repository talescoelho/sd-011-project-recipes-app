import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import MainRecipes from './pages/main/MainRecipes';
import MainDrinks from './pages/main/MainDrinks';
import Explore from './pages/explore/Explore';
import ExploreRecipes from './pages/explore/ExploreRecipes';
import ExploreDrinks from './pages/explore/ExploreDrinks';
import ExploreRecipesByIngredients from './pages/explore/ExploreRecipesByIngredients';
import ExploreDrinksByIngredients from './pages/explore/ExploreDrinksByIngredients';
import ExploreRecipesByLocal from './pages/explore/ExploreRecipesByLocal';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ MainRecipes } />
        <Route exact path="/bebidas" component={ MainDrinks } />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/explorar/comidas" component={ ExploreRecipes } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExploreRecipesByIngredients }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExploreDrinksByIngredients }
        />
        <Route exact path="/explorar/comidas/area" component={ ExploreRecipesByLocal } />
        <Route exact path="/perfil" component={ Profile } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
