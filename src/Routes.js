import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Meal from './pages/Meal';
import Cocktail from './pages/Cocktail';
import Profile from './pages/Profile';
import Explorer from './pages/Explorer';
import ExplorerMeals from './pages/ExplorerMeals';
import ExplorerCocktail from './pages/ExplorerCocktails';
import MealsOrigin from './pages/ExplorerMealsOrigin';
import MealsIngredients from './pages/ExplorerMealsIngredients';
import CocktailsIgredients from './pages/ExplorerCocktailsIngredients';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Meal } />
        <Route exact path="/bebidas" component={ Cocktail } />
        {/* <Route exact path="/comidas/:id" component={ Login } />
        <Route exact path="/bebidas/:id" component={ Login } />
        <Route exact path="/comidas/:id/in-progress" component={ Login } />
        <Route exact path="/bebidas/:id/in-progress" component={ Login } /> */}
        <Route exact path="/explorar" component={ Explorer } />
        <Route exact path="/explorar/comidas" component={ ExplorerMeals } />
        <Route exact path="/explorar/bebidas" component={ ExplorerCocktail } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ MealsIngredients }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ CocktailsIgredients }
        />
        <Route exact path="/explorar/comidas/area" component={ MealsOrigin } />
        <Route exact path="/perfil" component={ Profile } />
        {/* <Route exact path="/receitas-feitas" component={ Login } />
        <Route exact path="/receitas-favoritas" component={ Login } /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
