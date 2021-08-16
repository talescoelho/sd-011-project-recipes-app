import React from 'react';
import { Switch, Route } from 'react-router';
import Login from '../pages/login';
import Comidas from '../pages/comidas';
import Bebidas from '../pages/bebidas';
import ComidaDetails from '../pages/comidas/recipeId';
import BebidaDetails from '../pages/bebidas/recipeId';
import ComidasInProgress from '../pages/comidas/recipeId/in-progress';
import BebidasInProgress from '../pages/bebidas/recipeId/in-progress';
import Explorar from '../pages/explorar';
import ExplorarComidas from '../pages/explorar/comidas';
import ExplorarBebidas from '../pages/explorar/bebidas';
import ComidasIngredientes from '../pages/explorar/comidas/ingredientes';
import BebidasIngredientes from '../pages/explorar/bebidas/ingredientes';
import ComidasArea from '../pages/explorar/comidas/area';
import Perfil from '../pages/perfil';
import ReceitasFeitas from '../pages/receitas-feitas';
import ReceitasFavoritas from '../pages/receitas-favoritas';
import NotFound from '../pages/not-found';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ Login } />
      <Route path="/comidas/:recipeId/in-progress" component={ ComidasInProgress } />
      <Route path="/bebidas/:recipeId/in-progress" component={ BebidasInProgress } />
      <Route path="/explorar/comidas/ingredientes" component={ ComidasIngredientes } />
      <Route path="/explorar/bebidas/ingredientes" component={ BebidasIngredientes } />
      <Route path="/explorar/comidas/area" component={ ComidasArea } />
      <Route path="/explorar/bebidas/area" component={ NotFound } />
      <Route path="/explorar/comidas" component={ ExplorarComidas } />
      <Route path="/explorar/bebidas" component={ ExplorarBebidas } />
      <Route path="/comidas/:recipeId" component={ ComidaDetails } />
      <Route path="/bebidas/:recipeId" component={ BebidaDetails } />
      <Route path="/explorar" component={ Explorar } />
      <Route path="/comidas" component={ Comidas } />
      <Route path="/bebidas" component={ Bebidas } />
      <Route path="/perfil" component={ Perfil } />
      <Route path="/receitas-feitas" component={ ReceitasFeitas } />
      <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
    </Switch>
  );
}

export default Routes;
