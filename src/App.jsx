import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import './App.css';
import store from './Redux/store';
import ProviderSearch from './context/ProviderSearch';

function App() {
  return (
    <Provider store={ store }>
      <ProviderSearch>
        <Routes />
      </ProviderSearch>
    </Provider>
  );
}

export default App;
