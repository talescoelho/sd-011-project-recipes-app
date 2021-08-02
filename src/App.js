import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipesProvider from './provider/recipesProvider';
import Login from './pages/Login';
import TelaPrincipal from './pages/TelaPrincipal';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

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
          <Route exact path="/comidas/:id" component={ NotFound } />
          <Route exact path="/bebidas/:id" component={ NotFound } />
          <Route exact path="/comidas/:id/in-progress" component={ NotFound } />
          <Route exact path="/bebidas/:id/in-progress" component={ NotFound } />
          { /* não tem header/footer /\ */ }
          <Route exact path="/explorar" component={ NotFound } />
          <Route exact path="/explorar/comidas" component={ NotFound } />
          <Route exact path="/explorar/bebidas" component={ NotFound } />
          <Route exact path="/explorar/comidas/ingredientes" component={ NotFound } />
          <Route exact path="/explorar/bebidas/ingredientes" component={ NotFound } />
          <Route exact path="/explorar/comidas/area" component={ NotFound } />
          <Route exact path="/perfil" component={ Profile } />
          { /* não tem footer \/ */ }
          <Route exact path="/receitas-feitas" component={ NotFound } />
          <Route exact path="/receitas-favoritas" component={ NotFound } />
          { /* não tem footer /\ */ }
        </Switch>
      </BrowserRouter>
    </RecipesProvider>
  );
}

export default App;
