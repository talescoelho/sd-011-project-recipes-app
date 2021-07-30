import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsDrinks from './pages/DetailsDrinks';
import DetailsFoods from './pages/DetailsFoods';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas/:id" component={ DetailsFoods } />
          <Route exact path="/bebidas/:id" component={ DetailsDrinks } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
