// src/helper/index.js
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import rootReducer from '../redux/reducers';

const createMockStore = (initialState) => (
  createStore(rootReducer, initialState, applyMiddleware(thunk))
);

const renderWithRouterAndRedux = (component, initialState = {},
  initialEntries = ['/']) => {
  const store = createMockStore(initialState);
  console.log(store.getState());
  const history = createMemoryHistory({ initialEntries });
  return (
    {
      ...render(
        <Router history={ history }>
          <Provider store={ store }>
            {component}
          </Provider>
        </Router>,
      ),
      store,
      history }
  );
};

export default renderWithRouterAndRedux;
