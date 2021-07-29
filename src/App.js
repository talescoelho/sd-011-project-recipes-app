import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/bebidas" component={ Bebidas } />
        <Route path="/comidas" component={ Comidas } />

      </Switch>
    </div>
  );
}

export default App;
