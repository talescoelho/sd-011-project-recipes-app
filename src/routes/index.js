import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Drinks from '../pages/Drinks';
import Foods from '../pages/Foods';
import Login from '../pages/Login';
import Explorer from '../pages/Explorer';
import Perfil from '../pages/Perfil';
import Recipes from '../pages/Recipes';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import RecipeDetails from '../pages/RecipeDetails';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Foods } />
        <Route exact path="/comidas/:id" component={ RecipeDetails } />
        <Route exact path="/bebidas" component={ Drinks } />
        <Route exact path="/bebidas/:id" component={ RecipeDetails } />
        <Route path="/explorar" component={ Explorer } />
        <Route path="/perfil" component={ Perfil } />
        <Route path="/receitas-feitas" component={ Recipes } />
        <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
      </Switch>
    </div>
  );
}

export default Routes;
