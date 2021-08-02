import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Perfil from './pages/Perfil';
// import Footer from './components/Footer';
import Explorar from './pages/Explorar';
import Comidas from './pages/Comidas';
import Login from './pages/Login';
import RecipesProvider from './context/RecipesProvider';

function App() {
  return (
    <div className="meals">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <RecipesProvider>
            <Route path="/comidas" component={ Comidas } />
            <Route path="/bebidas" component={ Comidas } />
            <Route path="/explorar" component={ Explorar } />
            <Route exact path="/perfil" component={ Perfil } />
          </RecipesProvider>

          <Route path="/comidas/{id-da-receita}" />
          <Route path="/comidas/{id-da-receita}/in-progress" />
          <Route path="/bebidas/{id-da-receita}" />
          <Route path="/bebidas/{id-da-receita}/in-progress" />
          <Route
            path="/explorar/comidas"
            component={ () => <Header title="Explorar Comidas" /> }
          />
          <Route
            path="/explorar/bebidas"
            component={ () => <Header title="Explorar Comidas" /> }
          />
          <Route
            path="/explorar/comidas/ingredientes"
            component={ () => <Header title="Explorar Ingredientes" /> }
          />
          <Route
            path="/explorar/bebidas/ingredientes"
            component={ () => <Header title="Explorar Ingredientes" /> }
          />
          <Route
            path="/explorar/comidas/area"
            component={ () => <Header title="Explorar Origem" showSearchIcon /> }
          />
          <Route
            path="/receitas-feitas"
            component={ () => <Header title="Receitas Feitas" /> }
          />
          <Route
            path="/receitas-favoritas"
            component={ () => <Header title="Receitas Favoritas" /> }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
