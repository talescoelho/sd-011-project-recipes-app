import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Perfil from './pages/Perfil';
import Footer from './components/Footer';
import Comidas from './pages/Comidas';
import Explorar from './pages/Explorar';
import Bebidas from './pages/Bebidas';
import Login from './pages/Login';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <div className="meals">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas" component={ Comidas } />
          <Route exact path="/bebidas" component={ Bebidas } />
          <Route exact path="/comidas/{id-da-receita}" />
          <Route exact path="/bebidas/{id-da-receita}" />
          <Route exact path="/comidas/{id-da-receita}/in-progress" />
          <Route exact path="/bebidas/{id-da-receita}/in-progress" />
          <Route exact path="/explorar" component={ Explorar } />
          <Route
            exact
            path="/explorar/comidas"
            component={ () => <Header title="Explorar Comidas" /> }
          />
          <Route
            exact
            path="/explorar/bebidas"
            component={ () => <Header title="Explorar Comidas" /> }
          />
          <Route
            exact
            path="/explorar/comidas/ingredientes"
            component={ () => <Header title="Explorar Ingredientes" /> }
          />
          <Route
            exact
            path="/explorar/bebidas/ingredientes"
            component={ () => <Header title="Explorar Ingredientes" /> }
          />
          <Route
            exact
            path="/explorar/comidas/area"
            component={ () => <Header title="Explorar Origem" showSearchIcon /> }
          />
          <Route exact path="/perfil" component={ Perfil } />
          <Route
            exact
            path="/receitas-feitas"
            component={ () => <Header title="Receitas Feitas" /> }
          />
          <Route
            exact
            path="/receitas-favoritas"
            component={ () => <Header title="Receitas Favoritas" /> }
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
