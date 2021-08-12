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
import DrinkInProgress from './pages/DrinkInProgress';
import MealsInProgress from './pages/MealsInProgress';
// import MealRecipeCard from './components/MealRecipeCard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/explorar/comidas/area" component={ FoodArea } />
        <Route exact path="/explorar/comidas" component={ ExploreFood } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrink } />
        <Route exact path="/comidas/:id" component={ MealDetails } />
        <Route exact path="/perfil" component={ Profile } />
        <Route exact path="/bebidas/:id" component={ DrinkDetails } />
        <Route exact path="/comidas" component={ Meals } />
        <Route exact path="/bebidas" component={ Drinks } />
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

        <Route path="/comidas/id:/in-progress" component={ MealsInProgress } />
        <Route path="/bebidas/id:/in-progress" component={ DrinkInProgress } />
        <Route path="*" component={ NotFound } />

        {/* <Route path="/bebidas:id" component={} />

        <Route path="/receitas-feitas" component={} />
        <Route path="/receitas-favoritas" component={} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
