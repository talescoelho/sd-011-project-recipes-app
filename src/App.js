import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={ store }>
      <Login />
    </Provider>
  );
}

export default App;
