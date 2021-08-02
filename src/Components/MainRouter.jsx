import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Foods from '../Pages/Foods';
import Drinks from '../Pages/Drinks';
import Explore from './Explore';
import ExploreFoods from './ExploreFoods';
import ExploreDrinks from './ExploreDrinks';
import ExploreFoodsIngredients from './ExploreFoodsIngredients';
import ExploreDrinksIngredients from './ExploreDrinksIngredients';
import ExploreFoodsOrigin from './ExploreFoodsOrigin';
import RecipesDone from './RecipesDone';
import Perfil from './Perfl';
import FavoriteRecipes from './FavoriteRecipes';

const MainRouter = () => (
  <Switch>
    {/* <Route exact path="/" component={} /> */}
    <Route exact path="/comidas" component={ Foods } />
    <Route exact path="/bebidas" component={ Drinks } />
    {/* <Route exact path={`/comidas/${id-da-receita}`} component={} />
      <Route exact path={`/bebidas/${id-da-receita}`} component={} />
      <Route exact path={`/comidas/${id-da-receita}/in-progress`} component={} />
      <Route exact path={`/bebidas/${id-da-receita}/in-progress`} component={} /> */}
    <Route exact path="/explorar" component={ Explore } />
    <Route exact path="/explorar/comidas" component={ ExploreFoods } />
    <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
    <Route
      exact
      path="/explorar/comidas/ingredientes"
      component={ ExploreFoodsIngredients }
    />
    <Route
      exact
      path="/explorar/bebidas/ingredientes"
      component={ ExploreDrinksIngredients }
    />
    <Route
      exact
      path="/explorar/comidas/area"
      component={ ExploreFoodsOrigin }
    />
    <Route exact path="/perfil" component={ Perfil } />
    <Route exact path="/receitas-feitas" component={ RecipesDone } />
    <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
  </Switch>
);

export default MainRouter;
