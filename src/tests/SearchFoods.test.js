import React from 'react';
import { screen } from '@testing-library/react';
import SearchFoods from '../pages/SearchFoods';

import { renderWithRouterAndStore } from './testConfig';

describe('Tests SearchFoods Page', () => {
  const searchFoodsRoute = '/explorar/comidas';
  it('Checks if Footer is rendered', () => {
    renderWithRouterAndStore(<SearchFoods />, searchFoodsRoute);
    const footerField = screen.getByTestId('footer');
    expect(footerField).toBeInTheDocument();
  });
  it('Checks if drinkIcon is rendered', () => {
    renderWithRouterAndStore(<SearchFoods />, searchFoodsRoute);
    const drinkButton = screen.getByTestId('drinks-bottom-btn');
    expect(drinkButton).toBeInTheDocument();
  });
  it('Checks if searchIcon is rendered', () => {
    renderWithRouterAndStore(<SearchFoods />, searchFoodsRoute);
    const searchButton = screen.getByTestId('explore-bottom-btn');
    expect(searchButton).toBeInTheDocument();
  });
  it('Checks if foodIcon is rendered', () => {
    renderWithRouterAndStore(<SearchFoods />, searchFoodsRoute);
    const foodButton = screen.getByTestId('food-bottom-btn');
    expect(foodButton).toBeInTheDocument();
  });
});
