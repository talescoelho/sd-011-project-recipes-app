import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { LoginPage, Home, NotFound } from './pages';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" render={ (props) => <LoginPage { ...props } /> } />
        <Route exact path="/home" render={ (props) => <Home { ...props } /> } />
        <Route component={ NotFound } />
      </Switch>
    </main>
  );
}

export default App;
