import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Meals from '../pages/Meals';
import Drinks from '../pages/Drinks';
import MealsDetailPage from '../pages/MealsDetailPage';
import Explore from '../pages/Explore';
import ExploreMeals from '../pages/ExploreMeals';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreMealsByArea from '../pages/ExploreMealsByArea';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import DoneRecipes from '../pages/DoneRecipes';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import DrinkDetails from '../components/DrinkDetails';
import ExploreMealsByIngredients from '../pages/ExploreMealsByIngredients';
import ExploreDrinksByIngredients from '../pages/ExploreDrinksByIngredients';
import MealInProgress from '../pages/MealInProgress';
import DrinksInProgress from '../pages/DrinksInProgress';
import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Meals } />
      <Route exact path="/bebidas" component={ Drinks } />
      <Route exact path="/explorar" component={ Explore } />
      <Route exact path="/comidas/:id" component={ MealsDetailPage } />
      <Route exact path="/comidas/:id/in-progress" component={ MealInProgress } />
      <Route exact path="/bebidas/:id" component={ DrinkDetails } />
      <Route
        exact
        path="/bebidas/:id/in-progress"
        render={ (props) => <DrinksInProgress { ...props } /> }
      />
      <Route exact path="/explorar/comidas" component={ ExploreMeals } />
      <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
      <Route
        exact
        path="/explorar/comidas/ingredientes"
        component={ ExploreMealsByIngredients }
      />
      <Route
        exact
        path="/explorar/bebidas/ingredientes"
        component={ ExploreDrinksByIngredients }
      />
      <Route exact path="/explorar/comidas/area" component={ ExploreMealsByArea } />
      <Route exact path="/perfil" component={ Profile } />
      <Route exact path="/receitas-feitas" component={ DoneRecipes } />
      <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
      <Route exact path="/explorar/bebidas/area" component={ NotFound } />
    </Switch>
  );
}
