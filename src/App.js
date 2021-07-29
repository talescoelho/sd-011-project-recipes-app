import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';
import Login from './pages/Login';

function App() {
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Switch>
          <Route exatc path="/" component={ Login } />
        </Switch>
      </BrowserRouter>
    </RecipesProvider>
  );
}

export default App;
