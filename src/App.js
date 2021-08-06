import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreIngredients from './pages/ExploreIngredients';
import ExploreFoodsArea from './pages/ExploreFoodsArea';
import Perfil from './pages/Perfil';
import MakedRevenues from './pages/MakedRevenues';
import FavoritedRevenues from './pages/FavoritedRevenues';
import FoodsInProgress from './pages/FoodsInProgress';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas/" component={ MainPage } />
          <Route exact path="/bebidas/" component={ MainPage } />
          <Route exact path="/comidas/:id" component={ Details } />
          <Route exact path="/bebidas/:id" component={ Details } />
          <Route exact path="/comidas/:id/in-progress" component={ FoodsInProgress } />
          <Route exact path="/bebidas/:id/in-progress" component={ FoodsInProgress } />
          <Route exact path="/explorar/" component={ Explore } />
          <Route exact path="/explorar/comidas" component={ ExploreFoods } />
          <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
          <Route
            exact
            path="/explorar/comidas/ingredientes/"
            component={ ExploreIngredients }
          />
          <Route
            exact
            path="/explorar/bebidas/ingredientes/"
            component={ ExploreIngredients }
          />
          <Route exact path="/explorar/comidas/area" component={ ExploreFoodsArea } />
          <Route exact path="/perfil" component={ Perfil } />
          <Route exact path="/receitas-feitas" component={ MakedRevenues } />
          <Route exact path="/receitas-favoritas" component={ FavoritedRevenues } />
          <Route exact path="/explorar/bebidas/area" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
