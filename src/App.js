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
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/explorar/comidas" component={ ExploreFood } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrink } />
        <Route path="/explorar/comidas/ingredientes" component={ FoodIngredient } />
        <Route path="/explorar/bebidas/ingredientes" component={ DrinkIngredient } />
        <Route path="/explorar/comidas/area" component={ FoodArea } />
        <Route path="/header" component={ Header } />
        <Route path="/comidas" component={ Meals } />
        <Route path="/bebidas" component={ Drinks } />
        <Route path="/explorar" component={ Explorar } />
        <Route path="/profile" component={ Profile } />
        <Route path="/comidas:id" component={ MealDetails } />
        {/* <Route path="/comidas" component={} />
        <Route path="/bebidas:id" component={} />
        <Route path="/explorar/comidas" component={} />
        <Route path="/explorar/bebidas" component={} />
        <Route path="/bebidas:id" component={} />
        <Route path="/explorar/comidas/ingredientes" component={} />
        <Route path="/explorar/bebidas/ingredientes" component={} />
        <Route path="/explorar/comidas/area" component={} />
        <Route path="/receitas-feitas" component={} />
        <Route path="/bebidas:id" component={} />
        <Route path="/receitas-favoritas" component={} />
        <Route path="*" component={ NotFound } /> */ }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
