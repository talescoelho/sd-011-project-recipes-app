import React from 'react';
import { queryByTestId } from '@testing-library/react';
import FavoriteRecipes from '../pages/FavoriteRecipes';

import { renderWithRouterAndStore } from './testConfig';

describe('The screen CompletedRecipes should have right icon from the Header', () => {
  it('Should have the profile button and title', () => {
    renderWithRouterAndStore(<FavoriteRecipes />);
    expect(queryByTestId(document.documentElement, 'profile-top-btn'))
      .toBeInTheDocument();
    expect(queryByTestId(document.documentElement, 'page-title'))
      .toBeInTheDocument();
  });
});
