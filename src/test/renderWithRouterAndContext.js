import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { SearchBarContext } from '../context/SearchBar';
import '@testing-library/jest-dom/extend-expect';

const renderWithRouterAndContext = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render (
      <SearchBarContext>
        <Router history={ history }>
          { component }
        </Router>
      </SearchBarContext>,
    ),
    history,
  });
};

export default renderWithRouterAndContext;
