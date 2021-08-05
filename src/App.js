import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Drinks from './pages/Drinks/Drinks';
import Explore from './pages/Explore/Explore';
import Foods from './pages/Foods/Foods';
import Profile from './pages/Profile/Profile';
import ExploreFoods from './pages/Explore/ExploreFoods';
import ExploreDrinks from './pages/Explore/ExploreDrinks';
import ExploreFoodIngredients from './pages/Explore/ExploreFoodIngredients';
import ExploreDrinksIngredients from './pages/Explore/ExploreDrinksIngredients';
import ExploreFoodsArea from './pages/Explore/ExploreFoodsArea';
import FoodDetails from './pages/Details/FoodDetails';
import FoodInProgress from './pages/InProgress/FoodInProgress';
import DrinkDetails from './pages/Details/DrinkDetails';
import DrinkInProgress from './pages/InProgress/DrinkInProgress';
import FavoriteRecipes from './pages/FavoriteRecipes/FavoriteRecipes';
import RecipesMade from './pages/RecipesMade/RecipesMade';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Foods } />
        <Route exact path="/comidas/:id" component={ FoodDetails } />
        <Route path="/comidas/:id/in-progress" component={ FoodInProgress } />
        <Route exact path="/bebidas" component={ Drinks } />
        <Route path="/bebidas/:id" component={ DrinkDetails } />
        <Route path="/bebidas/:id/in-progress" component={ DrinkInProgress } />
        <Route path="/receitas-feitas" component={ RecipesMade } />
        <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/perfil" component={ Profile } />
        <Route exact path="/explorar/comidas" component={ ExploreFoods } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
        <Route
          path="/explorar/comidas/ingredientes"
          component={ ExploreFoodIngredients }
        />
        <Route
          path="/explorar/bebidas/ingredientes"
          component={ ExploreDrinksIngredients }
        />
        <Route path="/explorar/comidas/area" component={ ExploreFoodsArea } />
        <Route exact path="/explorar/bebidas/area" component={ NotFound } />
      </Switch>
    </div>
  );
}
export default App;
