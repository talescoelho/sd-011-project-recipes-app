import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/login';

import './App.css';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route to="/" component={ Login }/>
      </Switch>
    </div>
  );
}

export default App;
