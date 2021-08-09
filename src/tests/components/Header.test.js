import React from 'react';
import {
  screen,
  fireEvent,
  queryByTestId,
} from '@testing-library/react';
import { renderWithRouterAndStore } from '../testConfig';

import Foods from '../../pages/Foods';

describe('Testing Header component functionalities', () => {
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
});
