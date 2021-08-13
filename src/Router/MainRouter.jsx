import { Switch, Route } from 'react-router-dom';
import React/* , { useContext } */ from 'react';
import MainExplorer from '../Pages/Explorer/MainExplorer';
import ExplorerDrinks from '../Pages/Explorer/Drinks/ExplorerDrinks';
import RecipesDrinks from '../Pages/Explorer/Drinks/RecipesDrinks';
import ExplorerFoods from '../Pages/Explorer/Foods/ExplorerFoods';
import RecipesFoods from '../Pages/Explorer/Foods/RecipesFoods';
import Origen from '../Pages/Explorer/Foods/Origen';
import Drinks from '../Pages/Main/Drinks';
import Foods from '../Pages/Main/Foods';
import User from '../Pages/User';
import Home from '../Pages/Home';
import RecipesDone from '../Pages/RecipesDone';
import FavoriteRecipes from '../Pages/FavoriteRecipes';
import DetailsRecipesDrinks from '../Pages/DetailsRecipes/DetailsRecipesDrinks';
import DetailsRecipesFoods from '../Pages/DetailsRecipes/DetailsRecipesFoods';
import ErrorPage from '../Pages/ErrorPage';

const MainRouter = () => (
  <Switch>
    <Route exact path="/" render={ () => <Home /> } />
    <Route
      exact
      path="/comidas/:id"
      render={ (props) => <DetailsRecipesFoods { ...props } /> }
    />
    <Route
      exact
      path="/bebidas/:id"
      render={ (props) => <DetailsRecipesDrinks { ...props } /> }
    />
    <Route exact path="/comidas" render={ () => <Foods /> } />
    <Route exact path="/bebidas" render={ () => <Drinks /> } />
    {/* <Route exact path={ `/comidas/${id-da-receita}/in-progress`}
       render={ () => < /> } */}
    {/* // <Route exact path={ `/bebidas/${id-da-receita}/in-progress`} */}
    {/* // render={ () => <MainDrinks /> } */}
    <Route exact path="/explorar" render={ () => <MainExplorer /> } />
    <Route exact path="/explorar/comidas" render={ () => <ExplorerFoods /> } />
    <Route exact path="/explorar/bebidas" render={ () => <ExplorerDrinks /> } />
    <Route
      exact
      path="/explorar/comidas/ingredientes"
      render={ () => <RecipesFoods /> }
    />
    <Route
      exact
      path="/explorar/bebidas/ingredientes"
      render={ () => <RecipesDrinks /> }
    />
    <Route exact path="/explorar/comidas/area" render={ () => <Origen /> } />
    <Route exact path="/perfil" render={ () => <User /> } />
    <Route exact path="/receitas-feitas" render={ () => <RecipesDone /> } />
    <Route exact path="/receitas-favoritas" render={ () => <FavoriteRecipes /> } />
    <Route path="*" component={ ErrorPage } />
  </Switch>
);
export default MainRouter;
