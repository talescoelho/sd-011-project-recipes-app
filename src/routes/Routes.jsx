import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Comidas from '../pages/Comidas';
import Bebidas from '../pages/Bebidas';
import Explorar from '../pages/Explorar';
import ExplorarComidas from '../pages/ExplorarComidas';
import ExplorarBebidas from '../pages/ExplorarBebidas';
import ExplorarComidasIngredientes from '../pages/ExplorarComidasIngredientes';
import ExplorarBebidasIngredientes from '../pages/ExplorarBebidasIngredientes';
import ExplorarPorLocalEOrigem from '../pages/ExplorarPorLocalEOrigem';
import ReceitasFeitas from '../pages/ReceitasFeitas';
import ReceitasFavoritas from '../pages/ReceitasFavoritas';
import Login from '../pages/Login';
import Perfil from '../pages/Perfil';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/comidas" component={ Comidas } />
      <Route path="/bebidas" component={ Bebidas } />
      <Route path="/explorar" component={ Explorar } />
      <Route path="/explorar/comidas" component={ ExplorarComidas } />
      <Route path="/explorar/bebidas" component={ ExplorarBebidas } />
      <Route path="/explorar/comidas/ingredientes" component={ ExplorarComidasIngredientes } />
      <Route path="/explorar/bebidas/ingredientes" component={ ExplorarBebidasIngredientes } />
      <Route path="/explorar/comidas/area" component={ ExplorarPorLocalEOrigem } />
      <Route path="/perfil" component={ Perfil } />
      <Route path="/receitas-feitas" component={ ReceitasFeitas } />
      <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
    </Switch>
  );
}
