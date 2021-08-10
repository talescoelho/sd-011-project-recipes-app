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
// import MealRecipeCard from './components/MealRecipeCard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/explorar" component={ Explore } />
        <Route path="/explorar/comidas/area" component={ FoodArea } />
        <Route exact path="/explorar/comidas" component={ ExploreFood } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrink } />
        <Route path="/comidas/:id" component={ MealDetails } />
        <Route path="/bebidas/:id" component={ DrinkDetails } />
        <Route path="/comidas" component={ Meals } />
        <Route path="/bebidas" component={ Drinks } />
        <Route path="/profile" component={ Profile } />
        <Route
          path="/explorar/comidas/ingredientes"
          component={ ExploreFoodIngredient }
        />
        <Route
          path="/explorar/bebidas/ingredientes"
          component={ ExploreDrinkIngredient }
        />
        {/*
        Tela de receita em processo de comida: /comidas/{id-da-receita}/in-progress;
        Tela de receita em processo de bebida: /bebidas/{id-da-receita}/in-progress;
        <Route path="/receitas-feitas" component={} />
        <Route path="/receitas-favoritas" component={} />
        <Route path="*" component={ NotFound } /> */ }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
