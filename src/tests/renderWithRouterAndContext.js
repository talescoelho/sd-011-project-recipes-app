import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { SearchBarContext } from '../context/SearchBar';

const renderWithRouterAndContext = (component, { providerProps, ...renderOptions }) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <SearchBarContext.Provider { ...providerProps }>
        <Router history={ history }>{ component }</Router>
      </SearchBarContext.Provider>,
      renderOptions,
    ),
    history,
  });
};

export default renderWithRouterAndContext;
