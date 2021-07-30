import { Route, BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';

// Pages Components \/
import Login from './Pages/Login';
import Foods from './Pages/Foods';
import Drinks from './Pages/Drinks';
import Profile from './Pages/Profile';
import Explore from './Pages/Explore';
import ExploreFoods from './Pages/Explore/ExploreFoods';
import ExploreDrinks from './Pages/Explore/ExploreDrinks';
import ExploreFoodsIngredients from './Pages/Explore/ExploreFoodsIngredients';
import ExploreDrinksIngredients from './Pages/Explore/ExploreDrinksIngredients';
import ExploreFoodsArea from './Pages/Explore/ExploreFoodsArea';
import ExploreDrinksArea from './Pages/Explore/ExploreDrinksArea';
import RecipesMade from './Pages/RecipesMade';
import FavoriteRecipes from './Pages/FavoriteRecipes';
// Pages Components /\

import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Foods } />
        <Route exact path="/bebidas" component={ Drinks } />
        <Route exact path="/perfil" component={ Profile } />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/explorar/comidas" component={ ExploreFoods } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExploreFoodsIngredients }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExploreDrinksIngredients }
        />
        <Route exact path="/explorar/comidas/area" component={ ExploreFoodsArea } />
        <Route exact path="/explorar/bebidas/area" component={ ExploreDrinksArea } />
        <Route exact path="/receitas-feitas" component={ RecipesMade } />
        <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
