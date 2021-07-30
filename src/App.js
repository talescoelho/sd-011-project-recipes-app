import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipesProvider from './provider/recipesProvider';
import Header from './components/Header';
import Login from './pages/Login';

function App() {
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Header } />
        </Switch>
      </BrowserRouter>
    </RecipesProvider>
  );
}

export default App;
