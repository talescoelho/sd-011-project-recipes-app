import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipesProvider from './provider/recipesProvider';
import Login from './pages/Login';
import TelaPrincipal from './pages/TelaPrincipal';
import DetalhesComida from './pages/DetalhesComida';
import DetalhesBebida from './pages/DetalhesBebida';
import ComidaEmProgresso from './pages/ComidaEmProgresso';
import BebidaEmProgresso from './pages/BebidaEmProgresso';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Explorar from './pages/Explorar';
import FavoriteRecipes from './pages/FavoriteRecipes';
import ReadyRecipe from './pages/ReadyRecipe';

function App() {
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Switch>
          { /* não tem header/footer \/ */ }
          <Route exact path="/" component={ Login } />
          { /* não tem header /\ */ }
          <Route exact path="/comidas" render={ () => <TelaPrincipal type="meal" /> } />
          <Route
            exact
            path="/bebidas"
            render={ () => <TelaPrincipal type="cocktail" /> }
          />
          { /* não tem header/footer \/ */ }
          <Route
            exact
            path="/comidas/:id"
            render={ (props) => <DetalhesComida { ...props } /> }
          />
          <Route
            exact
            path="/bebidas/:id"
            render={ (props) => <DetalhesBebida { ...props } /> }
          />
          <Route
            exact
            path="/comidas/:id/in-progress"
            render={ (props) => <ComidaEmProgresso { ...props } /> }
          />
          <Route
            exact
            path="/bebidas/:id/in-progress"
            render={ (props) => <BebidaEmProgresso { ...props } /> }
          />
          { /* não tem header/footer /\ */ }
          <Route exact path="/explorar" component={ Explorar } />
          <Route exact path="/explorar/comidas" component={ NotFound } />
          <Route exact path="/explorar/bebidas" component={ NotFound } />
          <Route exact path="/explorar/comidas/ingredientes" component={ NotFound } />
          <Route exact path="/explorar/bebidas/ingredientes" component={ NotFound } />
          <Route exact path="/explorar/comidas/area" component={ NotFound } />
          <Route exact path="/perfil" component={ Profile } />
          { /* não tem footer \/ */ }
          <Route exact path="/receitas-feitas" component={ ReadyRecipe } />
          <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
          { /* não tem footer /\ */ }
        </Switch>
      </BrowserRouter>
    </RecipesProvider>
  );
}

export default App;
