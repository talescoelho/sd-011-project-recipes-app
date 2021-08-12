import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import defaultStore from '../store';

const renderWithRouterAndStore = (component, {
  store = defaultStore,
  initialEntries = ['/'],
  history = createMemoryHistory({ initialEntries }),
  path = '/',
} = {}) => ({
  ...render(
    <Router history={ history }>
      <Provider store={ store }>
        <Route path={ path } render={ () => component } />
      </Provider>
    </Router>,
  ),
  store,
  history,
});

export default renderWithRouterAndStore;
