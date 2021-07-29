import { Switch, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Login from './Pages/Login';

function App() {
  return (
    <Switch>
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default App;
