import React from 'react';
import { screen } from '@testing-library/react';
import Foods from '../pages/Foods';

import { renderWithRouterAndStore } from './testConfig';

describe('Tests Foods Page', () => {
  it('Checks if Footer is rendered', () => {
    renderWithRouterAndStore(<Foods />, '/comidas');
    const footerField = screen.getByTestId('footer');
    expect(footerField).toBeInTheDocument();
  });
  it('Checks if drinkIcon is rendered', () => {
    renderWithRouterAndStore(<Foods />, '/comidas');
    const drinkButton = screen.getByTestId('drinks-bottom-btn');
    expect(drinkButton).toBeInTheDocument();
  });
  it('Checks if searchIcon is rendered', () => {
    renderWithRouterAndStore(<Foods />, '/comidas');
    const searchButton = screen.getByTestId('explore-bottom-btn');
    expect(searchButton).toBeInTheDocument();
  });
  it('Checks if foodIcon is rendered', () => {
    renderWithRouterAndStore(<Foods />, '/comidas');
    const foodButton = screen.getByTestId('food-bottom-btn');
    expect(foodButton).toBeInTheDocument();
  });
});
