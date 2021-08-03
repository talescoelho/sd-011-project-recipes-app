import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Perfil from './pages/Perfil';
import Explorar from './pages/Explorar';
import Comidas from './pages/Comidas';
import Login from './pages/Login';
import RecipesProvider from './context/RecipesProvider';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ExplorarPorOrigem from './pages/ExplorarPorOrigem';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="meals">
      <BrowserRouter>
        <RecipesProvider>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/comidas" component={ Comidas } />
            <Route exact path="/bebidas" component={ Comidas } />
            <Route exact path="/explorar" component={ Explorar } />
            <Route exact path="/perfil" component={ Perfil } />
            <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
            <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
            <Route
              exact
              path="/explorar/comidas"
              component={ ExplorarComidas }
            />
            <Route
              exact
              path="/explorar/bebidas"
              component={ ExplorarBebidas }
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
              component={ ExplorarPorOrigem }
            />
            <Route
              path="*"
              component={ NotFound }
            />
            <Route path="/comidas/{id-da-receita}" />
            <Route path="/comidas/{id-da-receita}/in-progress" />
            <Route path="/bebidas/{id-da-receita}" />
            <Route path="/bebidas/{id-da-receita}/in-progress" />
          </Switch>
        </RecipesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
