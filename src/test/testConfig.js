import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { render } from '@testing-library/react';
import reducer from '../reducers';

const renderWithRouterAndStore = (Component, routeConfigs = {}) => {
  const { route = '/' } = routeConfigs;
  const store = createStore(reducer, applyMiddleware(thunk));
  const history = createMemoryHistory({ initialEntries: [route] });
  const DynamicComponent = Component.type;
  /*
  Esse <Component.Type history={history}>
  equivale a  <Login history={history}/ >
  */

  return {
    ...render(
      <Provider store={ store }>
        <Router history={ history }>
          <DynamicComponent history={ history } />
        </Router>
      </Provider>,
    ),
    history,
    store,
  };
};

export default renderWithRouterAndStore;
