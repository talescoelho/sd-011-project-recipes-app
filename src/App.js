import React from 'react';
import './App.css';
import Login from './components/Login';
import { Switch, Route } from 'react-router-dom';
import ComidaPage from './pages/ComidaPage';
import Perfil from './pages/Perfil';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route path="/comidas" render={() => <ComidaPage />} />
        <Route path="/perfil" render={() => <Perfil />} />
      </Switch>
    </div>
  );
}

export default App;
