import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
        </Switch>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
