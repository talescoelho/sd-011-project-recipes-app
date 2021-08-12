import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Principal from './pages/Principal';
import RecipesProvider from './context/RecipesProvider';
import Detalhes from './pages/Detalhes';

function App() {
  return (
    <div className="meals">
      <BrowserRouter>
        <Switch>
          <RecipesProvider>
            <Route exact path="/" component={ Login } />
            <Route exact path="/comidas" component={ Principal } />
            <Route exact path="/bebidas" component={ Principal } />
            <Route exact path="/comidas/:id" component={ Detalhes } />
            <Route exact path="/bebidas/:id" component={ Detalhes } />
          </RecipesProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
