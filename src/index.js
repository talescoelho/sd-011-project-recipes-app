import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RecipeAppProvider from './provider/RecipeAppProvider';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'

ReactDOM.render(
  <BrowserRouter>
    <AlertProvider>
      <RecipeAppProvider>
        <App />
      </RecipeAppProvider>
    </AlertProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
