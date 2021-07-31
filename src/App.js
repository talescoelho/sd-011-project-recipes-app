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
// import { RecipesProvider } from './context/RecipesContext';

function App() {
  const pathFoods = '/explorar/comidas/ingredientes';
  const pathDrinks = '/explorar/bebidas/ingredientes';
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
//         <RecipesProvider>
          <Route exact path="/comidas" component={ Foods } />
          <Route exact path="/bebidas" component={ Drinks } />
//         </RecipesProvider>
        <Route exact path="/comidas/:id" component={ FoodRecipes } />
        <Route exact path="/bebidas/:id" component={ DrinkRecipes } />
        <Route path="/comidas/:id/in-progress" component={ FoodInProgress } />
        <Route path="/bebidas/:id/in-progress" component={ DrinkInProgress } />
        <Route exact path="/explorar" component={ Explorer } />
        <Route exact path="/explorar/comidas" component={ FoodExplorer } />
        <Route exact path="/explorar/bebidas" component={ DrinkExplorer } />
        <Route path={ pathFoods } component={ FoodExplorerByIngredients } />
        <Route path={ pathDrinks } component={ DrinkExplorerByIngredients } />
        <Route path="/explorar/comidas/area" component={ FoodExplorerByCountry } />
        <Route path="/perfil" component={ Profile } />
        <Route path="/receitas-feitas" component={ DoneRecipes } />
        <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
