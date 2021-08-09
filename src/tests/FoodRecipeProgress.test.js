import React from 'react';
import { queryByTestId } from '@testing-library/react';
import { renderWithRouterAndStore } from './helper/testConfig';

import FoodRecipeProgress from '../pages/FoodRecipeProgress';

describe('Shouldnt have a <Header /> component at food recipe progress screen', () => {
  it('Cant have a <Header /> component', () => {
    renderWithRouterAndStore(<FoodRecipeProgress />);
    expect(queryByTestId(document.documentElement, 'profile-top-btn'))
      .not.toBeInTheDocument();
    expect(queryByTestId(document.documentElement, 'page-title'))
      .not.toBeInTheDocument();
    expect(queryByTestId(document.documentElement, 'search-top-btn'))
      .not.toBeInTheDocument();
  });
});
