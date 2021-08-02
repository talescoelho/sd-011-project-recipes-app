import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './redux/store';
import './App.css';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ Recipes } />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
