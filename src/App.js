import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Provider store={ store }>
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
