import React from 'react';
import { screen } from '@testing-library/react';
import Foods from '../pages/Foods';

import { renderWithRouterAndStore } from './testConfig';

describe('Verify if the Header component have the atributs data-testid', () => {
  it('Have data-testid "profile-top-btn"', () => {
    renderWithRouterAndStore(<Foods />, '/comidas');
    const profileButton = screen.getByTestId('profile-top-btn');
    expect(profileButton).toBeInTheDocument();
  });

  it('Have data-testid "page-title"', () => {
    renderWithRouterAndStore(<Foods />, '/comidas');
    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toBeInTheDocument();
  });

  it('Have data-testid "search-top-btn"', () => {
    renderWithRouterAndStore(<Foods />, '/comidas');
    const searchButton = screen.getByTestId('search-top-btn');
    expect(searchButton).toBeInTheDocument();
  });
});

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
