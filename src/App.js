import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './context/Provider';
import Login from './pages/Login';
import Drinks from './pages/Drinks';
import Explorer from './pages/Explorer';
import ExplorerFoods from './pages/ExplorerFoods';
import Foods from './pages/Foods';
import ExplorerDrinks from './pages/ExplorerDrinks';
import ExplorerFoodsIngredients from './pages/ExplorerFoodsIngredients';
import ExplorerDrinksIngredients from './pages/ExplorerDrinksIngredientes';
import ExplorerByLocation from './pages/ExplorerByLocation';
import Profile from './pages/Profile';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Foods } />
        <Route exact path="/bebidas" component={ Drinks } />
        <Route exact path="/explorar" component={ Explorer } />
        <Route exact path="/explorar/comidas" component={ ExplorerFoods } />
        <Route exact path="/explorar/bebidas" component={ ExplorerDrinks } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExplorerFoodsIngredients }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExplorerDrinksIngredients }
        />
        <Route
          exact
          path="/explorar/comidas/area"
          component={ ExplorerByLocation }
        />
        <Route exact path="/perfil" component={ Profile } />

      </Switch>
    </Provider>
  );
}

export default App;
