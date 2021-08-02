import React from 'react';
import './App.css';
import Provider from './Context/Provider';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './Components/MainRouter';

function App() {
  return (
    <Provider>
      <MainRouter />
    </Provider>
  );
}

export default App;
