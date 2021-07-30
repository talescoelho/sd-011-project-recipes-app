import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Explorar from './pages/Explorar';
import Bebidas from './pages/Bebidas';
import Comidas from './pages/Comidas';
import Home from './pages/Home';
import DetalhesComidas from './pages/DetalhesComidas';
import DetalhesBebidas from './pages/DetalhesBebidas';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ExplorarIngredientesComidas from './pages/ExplorarIngredientesComidas';
import ExplorarIngredientesBebidas from './pages/ExplorarIngredientesBebidas';
import ExplorarComidasPorArea from './pages/ExplorarComidasPorArea';
import Perfil from './pages/Perfil';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/explorar" component={ Explorar } />
        <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
        <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
        <Route exact path="/comidas/:id" component={ DetalhesComidas } />
        <Route exact path="/bebidas/:id" component={ DetalhesBebidas } />
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
        <Route exact path="/explorar/comidas/area" component={ ExplorarComidasPorArea } />
        <Route path="/perfil" component={ Perfil } />
        <Route path="/receitas-feitas" component={ ReceitasFeitas } />
        <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
