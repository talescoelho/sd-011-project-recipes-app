import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Perfil from './pages/Perfil';
import Explorar from './pages/Explorar';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/bebidas" component={ Bebidas } />
        <Route path="/comidas" component={ Comidas } />
        <Route path="/perfil" component={ Perfil } />
        <Route path="/explorar" component={ Explorar } />
      </Switch>
    </div>
  );
}

export default App;
