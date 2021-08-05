import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './pages/NotFound';
import Foods from './pages/foods/Foods';
import FoodInProgress from './pages/foods/FoodInProgress';
import FoodRecipes from './pages/foods/FoodRecipes';
import FoodExplorer from './pages/foods/FoodExplorer';
import FoodExplorerByIngredients from './pages/foods/FoodExplorerByIngredients';
import FoodExplorerByCountry from './pages/foods/FoodExplorerByCountry';
import Drinks from './pages/drinks/Drinks';
import DrinkInProgress from './pages/drinks/DrinkInProgress';
import DrinkRecipes from './pages/drinks/DrinkRecipes';
import DrinkExplorer from './pages/drinks/DrinkExplorer';
import DrinkExplorerByIngredients from './pages/drinks/DrinkExplorerByIngredients';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Explorer from './pages/Explorer';
import './App.css';

function App() {
  const pFoods = '/explorar/comidas/ingredientes';
  const pDrinks = '/explorar/bebidas/ingredientes';
  const pFIP = '/comidas/:id/in-progress';
  const pDIP = '/bebidas/:id/in-progress';
  return (
    <BrowserRouter>
      <Switch>
        {/* só permite um Provider no App e só renderiza o que está acima do provider */}
        <Route exact path="/" component={ Login } />
        <Route exact path="/explorar" component={ Explorer } />
        <Route exact path="/explorar/comidas" component={ FoodExplorer } />
        <Route exact path="/explorar/bebidas" component={ DrinkExplorer } />
        <Route exact path="/comidas/:id" component={ FoodRecipes } />
        <Route exact path="/bebidas/:id" component={ DrinkRecipes } />
        <Route path={ pFIP } render={ (props) => <FoodInProgress { ...props } /> } />
        <Route path={ pDIP } render={ (props) => <DrinkInProgress { ...props } /> } />
        <Route path={ pFoods } component={ FoodExplorerByIngredients } />
        <Route path={ pDrinks } component={ DrinkExplorerByIngredients } />
        <Route path="/explorar/comidas/area" component={ FoodExplorerByCountry } />
        <Route path="/perfil" component={ Profile } />
        <Route path="/receitas-feitas" component={ DoneRecipes } />
        <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
        <Route exact path="/comidas" component={ Foods } />
        <Route exact path="/bebidas" component={ Drinks } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
