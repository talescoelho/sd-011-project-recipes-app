import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import Recipes from './Pages/Recipes';
import Bebidas from './Pages/Bebidas';
import ReceitaDeComida from './Pages/ReceitaDeComida';
import ReceitaDeBebida from './Pages/ReceitaDeBebida';
import MealInProgress from './Pages/MealInProgress';
import DrinkInProgress from './Pages/DrinkInProgress';
import Explore from './Pages/Explore';
import ExploreMeals from './Pages/ExploreMeals';
import ExploreDrinks from './Pages/ExploreDrinks';
import ExploreMealsByIgrediente from './Pages/ExploreMealsByIgrediente';
import ExploreDrinksByIgrediente from './Pages/ExploreDrinksByIgrediente';
import ExploreMealsByArea from './Pages/ExploreMealsByArea';
import Profile from './Pages/Profile';
import ReceitasFeitas from './Pages/ReceitasFeitas';
import ReceitasFavoritas from './Pages/ReceitasFavoritas';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas/:id/in-progress" component={ MealInProgress } />
        <Route path="/comidas/:id" component={ ReceitaDeComida } />
        <Route path="/comidas" component={ Recipes } />
        <Route
          path="/bebidas/:id/in-progress"
          component={ DrinkInProgress }
        />
        <Route path="/bebidas/:id" component={ ReceitaDeBebida } />
        <Route path="/bebidas" component={ Bebidas } />
        <Route path="/explorar" component={ Explore } />
        <Route path="/explorar/comidas" component={ ExploreMeals } />
        <Route path="/explorar/bebidas" component={ ExploreDrinks } />
        <Route
          path="/explorar/comidas/ingredientes"
          component={ ExploreMealsByIgrediente }
        />
        <Route
          path="/explorar/bebidas/ingredientes"
          component={ ExploreDrinksByIgrediente }
        />
        <Route path="/explorar/comidas/area" component={ ExploreMealsByArea } />
        <Route path="/perfil" component={ Profile } />
        <Route path="/receitas-feitas" component={ ReceitasFeitas } />
        <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
      </Switch>

      <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
    </div>
  );
}

export default App;
