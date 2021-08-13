import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import RecipesId from './pages/RecipesId';
import Explorar from './pages/Explorar';
import IngredienteBebida from './pages/IngredienteBebida';
import IngredienteComida from './pages/IngredienteComida';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ComidasArea from './pages/ComidasArea';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './pages/Profile';
import RecipesInProgress from './pages/RecipesInProgress';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/explorar" component={ Explorar } />
        <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
        <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
        <Route exact path="/perfil" component={ Profile } />
        <Route exact path="/bebidas/:id/in-progress" component={ RecipesInProgress } />
        <Route exact path="/comidas/:id/in-progress" component={ RecipesInProgress } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ IngredienteComida }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ IngredienteBebida }
        />
        <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
        <Route
          exact
          path="/comidas/:id"
          render={ (props) => <RecipesId { ...props } /> }
        />
        <Route
          exact
          path="/bebidas/:id"
          render={ (props) => <RecipesId { ...props } /> }
        />
        <Route exact path="/explorar/comidas/area" component={ ComidasArea } />
        <Route
          exact
          path="/receitas-favoritas"
          component={ ReceitasFavoritas }
        />
        <Route component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
