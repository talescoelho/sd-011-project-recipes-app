import { Switch, Route } from 'react-router-dom';
import React from 'react';
import MainExplorer from '../Pages/Explorer/MainExplorer';
import ExplorerDrinks from '../Pages/Explorer/Drinks/ExplorerDrinks';
import RecipesDrinks from '../Pages/Explorer/Drinks/RecipesDrinks';
import ExplorerFoods from '../Pages/Explorer/Foods/ExplorerFoods';
import RecipesFoods from '../Pages/Explorer/Foods/RecipesFoods';
import Origen from '../Pages/Explorer/Foods/Origen';
import MainDrinks from '../Pages/Main/Drinks';
import MainFoods from '../Pages/Main/Foods';
import User from '../Pages/User';
import Home from '../Pages/Home';

const MainRouter = () => (
  <Switch>
    <Route exact path="/" render={ () => <Home /> } />
    <Route exact path="/comidas" render={ () => <MainFoods /> } />
    <Route exact path="/bebidas" render={ () => <MainDrinks /> } />
    {/* <Route exact path={ `/comidas/${id-da-receita}`} render={ () => <MainDrinks /> }
    <Route exact path={ `/bebidas/${id-da-receita}`} render={ () => <MainDrinks /> }
    <Route exact path={ `/comidas/${id-da-receita}/in-progress`} render={ () => <MainDrinks /> }
    <Route exact path={ `/bebidas/${id-da-receita}/in-progress`}
    render={ () => <MainDrinks /> } */}
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
    {/* <Route exact path="/receitas-feitas" render={ () => <MainDrinks /> }
    <Route exact path="/receitas-favoritas" render={ () => <MainDrinks /> } */}
  </Switch>
);

export default MainRouter;
