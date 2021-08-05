import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './context/Provider';
import Login from './pages/Login';
import Drinks from './pages/Drinks';
import Explorer from './pages/Explorer';
import ExplorerFoods from './pages/ExplorerFoods';
import Foods from './pages/Foods';
import ExplorerDrinks from './pages/ExplorerDrinks';
import ExplorerFoodsIngredients from './pages/ExplorerFoodsIngredients';
import ExplorerDrinksIngredients from './pages/ExplorerDrinksIngredientes';
import ExplorerByLocation from './pages/ExplorerByLocation';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import DetailsFood from './pages/DetailsFood';
import DetailsDrinks from './pages/DetailsDrinks';
import ProgressFoodRecipe from './pages/ProgressFoodRecipe';
import ProgressDrinkRecipe from './pages/ProgressDrinkRecipe';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Foods } />
        <Route exact path="/bebidas" component={ Drinks } />
        <Route exact path="/explorar" component={ Explorer } />
        <Route exact path="/explorar/comidas" component={ ExplorerFoods } />
        <Route exact path="/explorar/bebidas" component={ ExplorerDrinks } />
        <Route
          exact
          path="/comidas/:id"
          component={ DetailsFood }
        />
        <Route
          exact
          path="/comidas/:id/in-progress"
          render={ (props) => <ProgressFoodRecipe { ...props } /> }
        />
        <Route
          exact
          path="/bebidas/:id"
          component={ DetailsDrinks }

        />
        <Route
          exact
          path="/bebidas/:id/in-progress"
          render={ (props) => <ProgressDrinkRecipe { ...props } /> }
        />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExplorerFoodsIngredients }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExplorerDrinksIngredients }
        />
        <Route
          exact
          path="/explorar/comidas/area"
          component={ ExplorerByLocation }
        />
        <Route exact path="/perfil" component={ Profile } />
        <Route
          exact
          path="/receitas-feitas"
          component={ DoneRecipes }
        />
        <Route
          exact
          path="/receitas-favoritas"
          component={ FavoriteRecipes }
        />
      </Switch>
    </Provider>
  );
}

export default App;
