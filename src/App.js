import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Explorar from './pages/Explorar';
import Perfil from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ Comidas } />
        <Route path="/bebidas" component={ Bebidas } />
        <Route path="/explorar" component={ Explorar } />
        <Route path="/perfil" component={ Perfil } />
        {/* <Route path="/comidas:id-" component={} />
        <Route path="/explorar/comidas" component={} />
        <Route path="/explorar/bebidas" component={} />
        <Route path="/bebidas:id" component={} />
        <Route path="/explorar/comidas/ingredientes" component={} />
        <Route path="/explorar/bebidas/ingredientes" component={} />

        <Route path="/explorar/comidas/area" component={} />
        <Route path="/receitas-feitas" component={} />
        <Route path="/receitas-favoritas" component={} />
        <Route path="*" component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
