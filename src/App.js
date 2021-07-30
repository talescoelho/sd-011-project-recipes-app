import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  // const pathFoods = '/explorar/comidas/ingredientes';
  // const pathDrinks = '/explorar/bebidas/ingredientes';
  return (
    // <div className="meals">
    //   <span className="logo">TRYBE</span>
    //   <object
    //     className="rocksGlass"
    //     type="image/svg+xml"
    //     data={ rockGlass }
    //   >
    //     Glass
    //   </object>
    // </div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        {/* <Route exact path="/comidas" component={ Foods } />
      <Route exact path="/bebidas" component={ Drinks } />
      <Route exact path="/comidas/:id" component={ FoodRecipes } />
      <Route exact path="/bebidas/:id" component={ DrinkRecipes } />
      <Route path="/comidas/:id/in-progress" component={ FoodInProgress } />
      <Route path="/bebidas/:id/in-progress" component={ DrinkInProgress } />
      <Route exact path="/explorar" component={ Explorer } />
      <Route exact path="/explorar/comidas" component={ FoodExplorer } />
      <Route exact path="/explorar/bebidas" component={ DrinkExplorer } />
      <Route path={ pathFoods } component={ FoodExplorerByIngredients } />
      <Route path={ pathDrinks } component={ DrinkExplorerByIngredients } />
      <Route path="/explorar/comidas/area" component={ FoodExplorerByCountry } />
      <Route path="/perfil " component={ Profile } />
      <Route path="/receitas-feitas " component={ DoneRecipes } />
      <Route path="/receitas-favoritas " component={ FavoriteRecipes } /> */}
        <Route path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
