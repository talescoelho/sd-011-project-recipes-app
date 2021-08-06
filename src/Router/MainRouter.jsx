import { Switch, Route } from 'react-router-dom';
import React from 'react';
import MainExplorer from '../Pages/Explorer/MainExplorer';
import ExplorerDrinks from '../Pages/Explorer/Drinks/ExplorerDrinks';
import RecipesDrinks from '../Pages/Explorer/Drinks/RecipesDrinks';
import ExplorerFoods from '../Pages/Explorer/Foods/ExplorerFoods';
import RecipesFoods from '../Pages/Explorer/Foods/RecipesFoods';
import Origen from '../Pages/Explorer/Foods/Origen';
import Drinks from '../Pages/Main/Drinks';
import Foods from '../Pages/Main/Foods';
import User from '../Pages/User';
import Home from '../Pages/Home';
import RecipesDone from '../Pages/RecipesDone';
import FavoriteRecipes from '../Pages/FavoriteRecipes';
import DrinkProgress from '../Pages/DrinkProgress';
import FoodProgress from '../Pages/FoodProgress';

const MainRouter = () => (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/comidas" component={ Foods } />
    <Route exact path="/bebidas" component={ Drinks } />
    <Route exact path="/explorar" component={ MainExplorer } />
    <Route exact path="/explorar/comidas" component={ ExplorerFoods } />
    <Route exact path="/explorar/bebidas" component={ ExplorerDrinks } />
    <Route
      exact
      path="/explorar/comidas/ingredientes"
      component={ RecipesFoods }
    />
    <Route
      exact
      path="/explorar/bebidas/ingredientes"
      component={ RecipesDrinks }
    />
    <Route exact path="/explorar/comidas/area" component={ Origen } />
    <Route exact path="/perfil" component={ User } />
    <Route exact path="/receitas-feitas" component={ RecipesDone } />
    <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
    <Route
      exact
      path="/bebidas/:id/in-progress"
      component={ DrinkProgress }
    />
    <Route
      exact
      path="/comidas/:id/in-progress"
      component={ FoodProgress }
    />
  </Switch>
);

export default MainRouter;
