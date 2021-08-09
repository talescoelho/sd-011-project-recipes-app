import React from 'react';
import { queryByTestId } from '@testing-library/react';
import { renderWithRouterAndStore } from './helper/testConfig';

import DrinkRecipeProgress from '../pages/DrinkRecipeProgress';

describe('Shouldnt have a <Header /> component at drink recipe progress screen', () => {
  it('Cant have a <Header /> component', () => {
    renderWithRouterAndStore(<DrinkRecipeProgress />);
    expect(queryByTestId(document.documentElement, 'profile-top-btn'))
      .not.toBeInTheDocument();
    expect(queryByTestId(document.documentElement, 'page-title'))
      .not.toBeInTheDocument();
    expect(queryByTestId(document.documentElement, 'search-top-btn'))
      .not.toBeInTheDocument();
  });
});
