import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import DetailsProvider from './context/detailsProvider';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <DetailsProvider>
          <Routes />
        </DetailsProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
