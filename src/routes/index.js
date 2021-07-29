import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Drinks from '../Components/Drinks';
import Foods from '../Components/Foods';
import Login from '../Components/Login';
import Explorer from '../Components/Explorer';
import Perfil from '../Components/Perfil';
import Recipes from '../Components/Recipes';
import FavoriteRecipes from '../Components/FavoriteRecipes';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ Foods } />
        <Route path="/bebidas" component={ Drinks } />
        <Route path="/explorar" component={ Explorer } />
        <Route path="/perfil" component={ Perfil } />
        <Route path="/receitas-feitas" component={ Recipes } />
        <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
      </Switch>
    </div>
  );
}

export default Routes;
