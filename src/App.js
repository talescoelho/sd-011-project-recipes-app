import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Meals from './pages/Meals';
import Bebidas from './pages/Bebidas';
import Explorar from './pages/Explorar';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Login } />
        <Route path="/header" component={ Header } />
        <Route path="/comidas" component={ Meals } />
        <Route path="/bebidas" component={ Bebidas } />
        <Route path="/explorar" component={ Explorar } />
        <Route path="/profile" component={ Profile } />
        { /* <Route path="/comidas" component={} />
        <Route path="/comidas:id-" component={} />
        <Route path="/bebidas:id" component={} />
        <Route path="/explorar/comidas" component={} />
        <Route path="/explorar/bebidas" component={} />
        <Route path="/bebidas:id" component={} />
        <Route path="/explorar/comidas/ingredientes" component={} />
        <Route path="/explorar/bebidas/ingredientes" component={} />

        <Route path="/explorar/comidas/area" component={} />
        <Route path="/receitas-feitas" component={} />
        <Route path="/receitas-favoritas" component={} />
        <Route path="*" component={ NotFound } /> */ }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
