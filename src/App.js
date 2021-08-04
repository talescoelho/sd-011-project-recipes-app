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
import Detalhes from './pages/Detalhes';

function App() {
  return (
    <div className="meals">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <RecipesProvider>
            <Route exact path="/comidas" component={ Comidas } />
            <Route exact path="/bebidas" component={ Comidas } />
            <Route path="/explorar" component={ Explorar } />
            <Route exact path="/perfil" component={ Perfil } />
            <Route exact path="/comidas/:id" component={ Detalhes } />
            <Route exact path="/comidas/:id/in-progress" />
            <Route exact path="/bebidas/:id" component={ Detalhes } />
            <Route exact path="/bebidas/:id/in-progress" />
          </RecipesProvider>

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
