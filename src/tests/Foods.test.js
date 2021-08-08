import React from 'react';
import {
  screen,
  fireEvent,
  queryByTestId,
} from '@testing-library/react';
import { renderWithRouterAndStore } from './testConfig';

import Foods from '../pages/Foods';

describe.only('Testing Header component functionalities', () => {
  it('When click on the profile button render Profile', () => {
    const { history } = renderWithRouterAndStore(<Foods />);
    const profileButton = screen.getByTestId('profile-top-btn');

    fireEvent.click(profileButton);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/perfil');
  });

  it('Show and hide when click on search button', () => {
    renderWithRouterAndStore(<Foods />);
    const searchButton = screen.getByTestId('search-top-btn');

    expect(searchButton).toBeInTheDocument();

    expect(queryByTestId(document.documentElement, 'search-input')).toBe(null);
    fireEvent.click(searchButton);
    expect(queryByTestId(document.documentElement, 'search-input')).toBeInTheDocument();
  });

  it('Should have the data tests id as search bar as all radio buttons', () => {

  });
});

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
