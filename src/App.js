import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Explore from './pages/Explore';
import ExploreDrink from './pages/ExploreDrink';
import ExploreFood from './pages/ExploreFood';
import FoodArea from './pages/FoodArea';
import Login from './pages/Login';
import Meals from './pages/Meals';
import Profile from './pages/Profile';
import MealDetails from './pages/MealDetails';
import DrinkDetails from './pages/DrinkDetails';
import Drinks from './pages/Drinks';
import ExploreDrinkIngredient from './pages/ExploreDrinkIngredient';
import ExploreFoodIngredient from './pages/ExploreFoodIngredient';
import NotFound from './pages/NotFound';
import RecipesMade from './pages/RecipesMade';
import RecipesFavorites from './pages/RecipesFavorites';
import DrinkInProgress from './pages/DrinkInProgress';
import MealsInProgress from './pages/MealsInProgress';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExploreFoodIngredient }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExploreDrinkIngredient }
        />
        <Route exact path="/comidas/:id/in-progress" component={ MealsInProgress } />
        <Route exact path="/bebidas/:id/in-progress" component={ DrinkInProgress } />
        <Route exact path="/comidas/:id" component={ MealDetails } />
        <Route exact path="/bebidas/:id" component={ DrinkDetails } />
        <Route exact path="/explorar/comidas/area" component={ FoodArea } />
        <Route exact path="/explorar/comidas" component={ ExploreFood } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrink } />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/comidas" component={ Meals } />
        <Route exact path="/bebidas" component={ Drinks } />
        <Route exact path="/receitas-feitas" component={ RecipesMade } />
        <Route exact path="/receitas-favoritas" component={ RecipesFavorites } />
        <Route exact path="/perfil" component={ Profile } />
        <Route exact path="/" component={ Login } />
        <Route path="*" component={ NotFound } />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
