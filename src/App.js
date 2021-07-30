import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './store';

function App() {
  return (
    <Provider store={ store }>
      <Routes />
    </Provider>
  );
}

export default App;
