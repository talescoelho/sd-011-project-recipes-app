import React from 'react';
import { queryByTestId } from '@testing-library/react';
import { renderWithRouterAndStore } from './helper/testConfig';

import DrinkDetails from '../pages/DrinkDetails';

describe('Should not have a <Header /> component in the Drink Details screen', () => {
  it('Cant have a <Header /> component', () => {
    renderWithRouterAndStore(<DrinkDetails />);
    expect(queryByTestId(document.documentElement, 'profile-top-btn'))
      .not.toBeInTheDocument();
    expect(queryByTestId(document.documentElement, 'page-title'))
      .not.toBeInTheDocument();
    expect(queryByTestId(document.documentElement, 'search-top-btn'))
      .not.toBeInTheDocument();
  });
});
