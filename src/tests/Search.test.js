import React from 'react';
import { screen } from '@testing-library/react';
import Search from '../pages/Search';

import { renderWithRouterAndStore } from './testConfig';

describe('Tests Search Page', () => {
  it('Checks if Footer is rendered', () => {
    renderWithRouterAndStore(<Search />, '/explorar');
    const footerField = screen.getByTestId('footer');
    expect(footerField).toBeInTheDocument();
  });
  it('Checks if drinkIcon is rendered', () => {
    renderWithRouterAndStore(<Search />, '/explorar');
    const drinkButton = screen.getByTestId('drinks-bottom-btn');
    expect(drinkButton).toBeInTheDocument();
  });
  it('Checks if searchIcon is rendered', () => {
    renderWithRouterAndStore(<Search />, '/explorar');
    const searchButton = screen.getByTestId('explore-bottom-btn');
    expect(searchButton).toBeInTheDocument();
  });
  it('Checks if foodIcon is rendered', () => {
    renderWithRouterAndStore(<Search />, '/explorar');
    const foodButton = screen.getByTestId('food-bottom-btn');
    expect(foodButton).toBeInTheDocument();
  });
});
