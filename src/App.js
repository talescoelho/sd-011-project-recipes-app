import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
import Header from './components/Header';
import Perfil from './pages/Perfil';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/comidas" component={Meals} />
        <Route path="/bebidas" component={Drinks} />
        <Route path="/perfil" component={Perfil} />
      </Switch>
    </Router>
  );
}

export default App;
