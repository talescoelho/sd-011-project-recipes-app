import React from 'react';
import {
  screen,
  fireEvent,
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
});
