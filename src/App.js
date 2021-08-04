import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import DrinkIngredient from './pages/DrinkIngredient';
import Explore from './pages/Explore';
import ExploreDrink from './pages/ExploreDrink';
import ExploreFood from './pages/ExploreFood';
import FoodArea from './pages/FoodArea';
import FoodIngredient from './pages/FoodIngredient';
import Header from './components/Header';
import Login from './pages/Login';
import Meals from './pages/Meals';
import Bebidas from './pages/Bebidas';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/explorar/comidas" component={ ExploreFood } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrink } />
        <Route path="/explorar/comidas/ingredientes" component={ FoodIngredient } />
        <Route path="/explorar/bebidas/ingredientes" component={ DrinkIngredient } />
        <Route path="/explorar/comidas/area" component={ FoodArea } />
        <Route path="/header" component={ Header } />
        <Route path="/comidas" component={ Meals } />
        <Route path="/bebidas" component={ Bebidas } />
        <Route path="/profile" component={ Profile } />
        { /* <Route path="/comidas:id-" component={} />
        <Route path="/bebidas:id" component={} />
        <Route path="/bebidas:id" component={} />
        <Route path="/receitas-feitas" component={} />
        <Route path="/receitas-favoritas" component={} />
        <Route path="*" component={ NotFound } /> */ }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
