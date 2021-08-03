import React from 'react';
import { screen } from '@testing-library/react';
import SearchDrinks from '../pages/SearchDrinks';

import { renderWithRouterAndStore } from './testConfig';

describe('Tests SearchDrinks Page', () => {
  const searchDrinksRoute = '/explorar/bebidas';
  it('Checks if Footer is rendered', () => {
    renderWithRouterAndStore(<SearchDrinks />, searchDrinksRoute);
    const footerField = screen.getByTestId('footer');
    expect(footerField).toBeInTheDocument();
  });
  it('Checks if drinkIcon is rendered', () => {
    renderWithRouterAndStore(<SearchDrinks />, searchDrinksRoute);
    const drinkButton = screen.getByTestId('drinks-bottom-btn');
    expect(drinkButton).toBeInTheDocument();
  });
  it('Checks if searchIcon is rendered', () => {
    renderWithRouterAndStore(<SearchDrinks />, searchDrinksRoute);
    const searchButton = screen.getByTestId('explore-bottom-btn');
    expect(searchButton).toBeInTheDocument();
  });
  it('Checks if foodIcon is rendered', () => {
    renderWithRouterAndStore(<SearchDrinks />, searchDrinksRoute);
    const foodButton = screen.getByTestId('food-bottom-btn');
    expect(foodButton).toBeInTheDocument();
  });
});
