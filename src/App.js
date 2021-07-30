import React from 'react';
import { Route } from 'react-router-dom';
import Provider from './Context/Provider';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './Components/MainRouter';

function App() {
  return (
    <Provider>
      <MainRouter />
      <Route exact path="/" />
    </Provider>
  );
}

export default App;
