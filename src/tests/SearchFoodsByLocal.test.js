import React from 'react';
import { screen } from '@testing-library/react';
import SearchFoodsByLocal from '../pages/SearchFoodsByLocal';

import { renderWithRouterAndStore } from './testConfig';

describe('Tests SearchFoodsByLocal Page', () => {
  const searchFoodsByLocalRoute = '/explorar/comidas/area';
  it('Checks if Footer is rendered', () => {
    renderWithRouterAndStore(<SearchFoodsByLocal />, searchFoodsByLocalRoute);
    const footerField = screen.getByTestId('footer');
    expect(footerField).toBeInTheDocument();
  });
  it('Checks if drinkIcon is rendered', () => {
    renderWithRouterAndStore(<SearchFoodsByLocal />, searchFoodsByLocalRoute);
    const drinkButton = screen.getByTestId('drinks-bottom-btn');
    expect(drinkButton).toBeInTheDocument();
  });
  it('Checks if searchIcon is rendered', () => {
    renderWithRouterAndStore(<SearchFoodsByLocal />, searchFoodsByLocalRoute);
    const searchButton = screen.getByTestId('explore-bottom-btn');
    expect(searchButton).toBeInTheDocument();
  });
  it('Checks if foodIcon is rendered', () => {
    renderWithRouterAndStore(<SearchFoodsByLocal />, searchFoodsByLocalRoute);
    const foodButton = screen.getByTestId('food-bottom-btn');
    expect(foodButton).toBeInTheDocument();
  });
});
