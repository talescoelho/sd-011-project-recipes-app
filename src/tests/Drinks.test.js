import React from 'react';
import { screen } from '@testing-library/react';
import Drinks from '../pages/Drinks';

import { renderWithRouterAndStore } from './testConfig';

describe('Tests Drinks Page', () => {
  it('Checks if Footer is rendered', () => {
    renderWithRouterAndStore(<Drinks />, '/bebidas');
    const footerField = screen.getByTestId('footer');
    expect(footerField).toBeInTheDocument();
  });
  it('Checks if drinkIcon is rendered', () => {
    renderWithRouterAndStore(<Drinks />, '/bebidas');
    const drinkButton = screen.getByTestId('drinks-bottom-btn');
    expect(drinkButton).toBeInTheDocument();
  });
  it('Checks if searchIcon is rendered', () => {
    renderWithRouterAndStore(<Drinks />, '/bebidas');
    const searchButton = screen.getByTestId('explore-bottom-btn');
    expect(searchButton).toBeInTheDocument();
  });
  it('Checks if foodIcon is rendered', () => {
    renderWithRouterAndStore(<Drinks />, '/bebidas');
    const foodButton = screen.getByTestId('food-bottom-btn');
    expect(foodButton).toBeInTheDocument();
  });
});
