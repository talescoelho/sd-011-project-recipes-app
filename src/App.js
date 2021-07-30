import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipesAppProvider from './context/RecipesAppProvider';
import rockGlass from './images/rockGlass.svg';
import Header from './components/Header';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import MenuInferior from './components/MenuInferior';

function App() {
  return (
    <div className="meals">
      <RecipesAppProvider>
        <SearchBar />
      </RecipesAppProvider>
      <Header />
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ Comidas } />
      </Switch>
      <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
      <MenuInferior />
    </div>
  );
}

export default App;
