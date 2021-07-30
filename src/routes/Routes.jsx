import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Comidas from '../pages/Comidas';
import Bebidas from '../pages/Bebidas';
import Explorar from '../pages/Explorar';
import DetalhesComidas from '../pages/DetalhesComidas';
import DetalhesBebidas from '../pages/DetalhesBebidas';
import ExplorarComidas from '../pages/ExplorarComidas';
import ExplorarBebidas from '../pages/ExplorarBebidas';
import ExplorarIngredientesComidas from '../pages/ExplorarIngredientesComidas';
import ExplorarIngredientesBebidas from '../pages/ExplorarIngredientesBebidas';
import ExplorarComidasPorArea from '../pages/ExplorarComidasPorArea';
import ReceitasFeitas from '../pages/ReceitasFeitas';
import ReceitasFavoritas from '../pages/ReceitasFavoritas';

export default function Routes() {
  return (
    <Switch>
      <Route path="/comidas" component={ Comidas } />
      <Route path="/bebidas" component={ Bebidas } />
      <Route exact path="/explorar" component={ Explorar } />
      <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
      <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
      <Route exact path="/comidas/:id" component={ DetalhesComidas } />
      <Route exact path="/bebidas/:id" component={ DetalhesBebidas } />
      <Route exact path="/explorar/comidas/area" component={ ExplorarComidasPorArea } />
      <Route path="/receitas-feitas" component={ ReceitasFeitas } />
      <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
      <Route
        exact
        path="/explorar/comidas/ingredientes"
        component={ ExplorarIngredientesComidas }
      />
      <Route
        exact
        path="/explorar/bebidas/ingredientes"
        component={ ExplorarIngredientesBebidas }
      />
    </Switch>
  );
}
