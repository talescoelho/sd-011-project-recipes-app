import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Perfil from './pages/Perfil';
import Explorar from './pages/Explorar';
import ComidasDetalhes from './pages/ComidasDetalhes';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ExplorarComidasIngredientes from './pages/ExplorarComidasIngredientes';
import ExplorarBebidasIngredientes from './pages/ExplorarBebidasIngredientes';
import ExplorarComidasArea from './pages/ExplorarComidasArea';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/comidas/:id" component={ ComidasDetalhes } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/perfil" component={ Perfil } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExplorarComidasIngredientes }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExplorarBebidasIngredientes }
        />
        <Route
          exact
          path="/explorar/comidas/area"
          component={ ExplorarComidasArea }
        />
        <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
        <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
        <Route exact path="/explorar" component={ Explorar } />
        <Route exact path="/" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
