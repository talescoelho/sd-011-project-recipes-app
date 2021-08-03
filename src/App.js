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
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Route
          exact
          path="/explorar/ingredientes/comidas"
          component={ IngredienteComida }
        />
        <Route
          exact
          path="/explorar/ingredientes/bebidas"
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
      </Switch>
    </div>
  );
}

export default App;
