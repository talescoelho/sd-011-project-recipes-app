import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserProvider } from './Context/UserHook';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/comidas" />
          <Route exact path="/bebidas" />
          <Route exact path="/comidas/{id-da-receita}" />
          <Route exact path="/bebidas/{id-da-receita}" />
          <Route exact path="/comidas/{id-da-receita}/in-progress" />
          <Route exact path="/bebidas/{id-da-receita}/in-progress" />
          <Route exact path="/explorar" />
          <Route exact path="/explorar/comidas" />
          <Route exact path="/explorar/bebidas" />
          <Route exact path="/explorar/comidas/ingredientes" />
          <Route exact path="/explorar/bebidas/ingredientes" />
          <Route exact path="/explorar/comidas/area" />
          <Route exact path="/perfil" />
          <Route exact path="/receitas-feitas" />
          <Route exact path="/receitas-favoritas" />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
