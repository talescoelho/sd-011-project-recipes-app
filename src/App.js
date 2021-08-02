import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import AppProvider from './context/AppProvider';
import Foods from './pages/Foods';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Foods } />
      </Switch>
    </AppProvider>
  );
}

export default App;
