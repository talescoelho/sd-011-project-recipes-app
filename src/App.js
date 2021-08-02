import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import MealDetails from './pages/MealDetails';
import DrinkDetails from './pages/DrinkDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route
          exact
          path="/comidas/:id"
          render={ (props) => <MealDetails { ...props } /> }
        />
        <Route
          exact
          path="/bebidas/:id"
          render={ (props) => <DrinkDetails { ...props } /> }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
