import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import './App.css';
import store from './Redux/store';
import './styles/Cards.css';
import './styles/FoodDetails.css';

function App() {
  return (
    <Provider store={ store }>
      <Routes />
    </Provider>
  );
}

export default App;
