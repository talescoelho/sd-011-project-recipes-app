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
          <Route
            exact
            path="/comidas/:id"
            render={ (props) => <DetailsFoods { ...props } /> }
          />
          <Route
            exact
            path="/bebidas/:id"
            render={ (props) => <DetailsDrinks { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
