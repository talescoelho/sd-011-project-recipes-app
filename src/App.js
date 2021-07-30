import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import HomeRecipes from './Pages/HomeRecipes';

function App() {
  return (
    <div className="meals">
      <span className="logo">TRYBE</span>
      <h2>APP de Receitas</h2>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/comidas" component={ HomeRecipes } />

          {/* <Route path="/settings" component={ Settings } />
          <Route path="/feedback" component={ Feedback } />
          <Route path="/ranking" component={ Ranking } /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
