import React from 'react';
import { queryByTestId } from '@testing-library/react';
import { renderWithRouterAndStore } from './helper/testConfig';

import FoodDetails from '../pages/FoodDetails';

describe('Should not have a <Header /> component in the Food Details screen', () => {
  it('Cant have a <Header /> component', () => {
    renderWithRouterAndStore(<FoodDetails />);
    expect(queryByTestId(document.documentElement, 'profile-top-btn'))
      .not.toBeInTheDocument();
    expect(queryByTestId(document.documentElement, 'page-title'))
      .not.toBeInTheDocument();
    expect(queryByTestId(document.documentElement, 'search-top-btn'))
      .not.toBeInTheDocument();
  });
});
