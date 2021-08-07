import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import Explorer from './pages/Explorer';
import ExplorerMeals from './pages/ExplorerMeals';
import ExplorerDrinks from './pages/ExplorerDrinks';
import MealsOrigin from './pages/ExplorerMealsOrigin';
import MealsIngredients from './pages/ExplorerMealsIngredients';
import DrinksIgredients from './pages/ExplorerDrinksIngredients';
import RecipesFavorites from './pages/RecipesFavorites';
import RecipesDone from './pages/RecipesDone';
import Details from './pages/Details';
import RecipeInProgress from './pages/RecipeInProgress';
import NotFound from './pages/NotFound';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Meals } />
        <Route exact path="/bebidas" component={ Drinks } />
        <Route exact path="/comidas/:id" component={ Details } />
        <Route exact path="/bebidas/:id" component={ Details } />
        <Route exact path="/comidas/:id/in-progress" component={ RecipeInProgress } />
        <Route exact path="/bebidas/:id/in-progress" component={ RecipeInProgress } />
        <Route exact path="/explorar" component={ Explorer } />
        <Route exact path="/explorar/comidas" component={ ExplorerMeals } />
        <Route exact path="/explorar/bebidas" component={ ExplorerDrinks } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ MealsIngredients }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ DrinksIgredients }
        />
        <Route exact path="/explorar/comidas/area" component={ MealsOrigin } />
        <Route exact path="/explorar/bebidas/area" component={ NotFound } />
        <Route exact path="/perfil" component={ Profile } />
        <Route exact path="/receitas-feitas" component={ RecipesDone } />
        <Route exact path="/receitas-favoritas" component={ RecipesFavorites } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
