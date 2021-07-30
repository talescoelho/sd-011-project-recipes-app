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

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Meals } />
        <Route exact path="/bebidas" component={ Drinks } />
        {/* <Route exact path="/comidas/:id" component={ Login } />
        <Route exact path="/bebidas/:id" component={ Login } />
        <Route exact path="/comidas/:id/in-progress" component={ Login } />
        <Route exact path="/bebidas/:id/in-progress" component={ Login } /> */}
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
        <Route exact path="/perfil" component={ Profile } />
        {/* <Route exact path="/receitas-feitas" component={ Login } />
        <Route exact path="/receitas-favoritas" component={ Login } /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
