import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import AppProvider from './context/AppProvider';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import FoodDetails from './pages/FoodDetails';
import DrinkDetails from './pages/DrinkDetails';
import FoodProcess from './pages/FoodProcess';
import DrinkProcess from './pages/DrinkProcess';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoodByIngredient from './pages/ExploreFoodByIngredient';
import ExploreDrinkByIngredient from './pages/ExploreDrinkByIngredient';
import ExploreFoodByArea from './pages/ExploreFoodByArea';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Foods } />
        <Route exact path="/bebidas" component={ Drinks } />
        <Route path="/perfil" component={ Profile } />
        <Route exact path="/comidas/:id" component={ FoodDetails } />
        <Route exact path="/bebidas/:id" component={ DrinkDetails } />
        <Route path="/comidas/:id/in-progress" component={ FoodProcess } />
        <Route path="/bebidas/:id/in-progress" component={ DrinkProcess } />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/explorar/comidas" component={ ExploreFoods } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
        <Route
          path="/explorar/comidas/ingredientes"
          component={ ExploreFoodByIngredient }
        />
        <Route
          path="/explorar/bebidas/ingredientes"
          component={ ExploreDrinkByIngredient }
        />
        <Route
          path="/explorar/comidas/area"
          component={ ExploreFoodByArea }
        />
        <Route exact path="/receitas-feitas" component={ DoneRecipes } />
        <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
        <Route exact component={ NotFound } />
      </Switch>
    </AppProvider>
  );
}

export default App;
