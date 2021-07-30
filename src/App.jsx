import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { LoginPage, Home, NotFound } from './pages';
import ProviderSearch from './ProviderSearch';

function App() {
  return (
    <ProviderSearch>
      <main>
        <Switch>
          <Route exact path="/" render={ (props) => <LoginPage { ...props } /> } />
          <Route exact path="/home" render={ (props) => <Home { ...props } /> } />
          <Route component={ NotFound } />
        </Switch>
      </main>
    </ProviderSearch>
  );
}

export default App;
