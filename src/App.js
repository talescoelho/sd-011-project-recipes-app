import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import RecipesId from './pages/RecipesId';
import Explorar from './pages/Explorar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/explorar" component={ Explorar } />
        <Route
          exact
          path="/comidas/:id"
          render={ (props) => <RecipesId { ...props } /> }
        />
        <Route
          exact
          path="/bebidas/:id"
          render={ (props) => <RecipesId { ...props } /> }
        />
      </Switch>
    </div>
  );
}

export default App;
