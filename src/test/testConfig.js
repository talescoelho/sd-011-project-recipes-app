import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { render } from '@testing-library/react';
import reducer from '../reducers';

const renderWithRouterAndStore = (Component, history) => {
  const store = createStore(reducer, applyMiddleware(thunk));

  return {
    ...render(
      <Provider store={ store }>
        <MemoryRouter history={ history }>
          {Component}
        </MemoryRouter>
      </Provider>,
    ),
    history,
    store,
  };
};

export default renderWithRouterAndStore;
