import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import DrinkIngredient from './pages/DrinkIngredient';
import Explore from './pages/Explore';
import ExploreDrink from './pages/ExploreDrink';
import ExploreFood from './pages/ExploreFood';
import FoodArea from './pages/FoodArea';
import FoodIngredient from './pages/FoodIngredient';
import Header from './components/Header';
import Login from './pages/Login';
import Meals from './pages/Meals';
import Explorar from './pages/Explorar';
import Profile from './pages/Profile';
import MealDetails from './pages/MealDetails';
import Drinks from './pages/Drinks';
// import MealRecipeCard from './components/MealRecipeCard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/explorar/comidas/ingredientes" component={ FoodIngredient } />
        <Route path="/explorar/bebidas/ingredientes" component={ DrinkIngredient } />
        <Route path="/explorar/comidas/area" component={ FoodArea } />
        <Route exact path="/explorar/comidas" component={ ExploreFood } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrink } />
        <Route exact path="/explorar" component={ Explore } />
        <Route path="/comidas/:id" component={ MealDetails } />
        <Route path="/comidas" component={ Meals } />
        <Route path="/bebidas" component={ Drinks } />
        <Route path="/profile" component={ Profile } />
        {/* <Route path="/bebidas:id" component={} />
        <Route path="/header" component={ Header } />
        Tela de receita em processo de comida: /comidas/{id-da-receita}/in-progress;
        Tela de receita em processo de bebida: /bebidas/{id-da-receita}/in-progress;
        <Route path="/explorar/bebidas/ingredientes" component={} />
        <Route path="/receitas-feitas" component={} />
        <Route path="/receitas-favoritas" component={} />
        <Route path="*" component={ NotFound } /> */ }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
