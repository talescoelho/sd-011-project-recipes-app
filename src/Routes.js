import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import DetailsMeals from './pages/DetailsMeals';
import DetailsDrink from './pages/DetailsDrink';
import Perfil from './components/Perfil';
import Explore from './pages/Explore';
import NotFound from './pages/NotFound';
import RecipesDone from './pages/RecipesDone';
import RecipesProgress from './components/RecipesProgress';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Recipes } />
      <Route exact path="/Bebidas" component={ Recipes } />
      <Route path="/comidas/:id" component={ DetailsMeals } />
      <Route path="/bebidas/:id" component={ DetailsDrink } />
      <Route exact path="/perfil" component={ Perfil } />
      <Route exact path="/explorar" component={ Explore } />
      <Route exact path="/explorar/comidas" component={ Explore } />
      <Route exact path="/explorar/bebidas" component={ Explore } />
      <Route exact path="/explorar/comidas/ingredientes" component={ Explore } />
      <Route exact path="/explorar/bebidas/ingredientes" component={ Explore } />
      <Route exact path="/explorar/comidas/area" component={ Explore } />
      <Route path="/receitas-feitas" component={ RecipesDone } />
      <Route path="/progress" component={ RecipesProgress } />
      <Route component={ NotFound } />
    </Switch>
  );
}
