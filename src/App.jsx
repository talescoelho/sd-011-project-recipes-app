import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { LoginPage, Home, NotFound, User, Drinks, Explore } from './pages';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" render={ (props) => <LoginPage { ...props } /> } />
        <Route exact path="/comidas" render={ (props) => <Home { ...props } /> } />
        <Route exact path="/bebidas" render={ (props) => <Drinks { ...props } /> } />
        <Route exact path="/explorar" render={ (props) => <Explore { ...props } /> } />
        <Route exact path="/perfil" render={ (props) => <User { ...props } /> } />
        <Route component={ NotFound } />
      </Switch>
    </main>
  );
}

export default App;
