import React from 'react';
import {
  screen,
  fireEvent,
} from '@testing-library/react';
import { renderWithRouterAndStore } from '../testConfig';

import Header from '../../components/Header/Header';

describe('Testing Header component functionalities', () => {
  it('When click on the profile button render Profile', () => {
    const { history } = renderWithRouterAndStore(<Header />);
    const profileButton = screen.getByTestId('profile-top-btn');

    fireEvent.click(profileButton);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/perfil');
  });

  // it('Show and hide when click on search button', () => {
  //   const {  }
  // });
});
