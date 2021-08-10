import React from 'react';
import { screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { Profile } from '../../pages';

beforeEach(() => {
  localStorage.setItem('user', '{ "email": "email@mail.com" }');
  localStorage.setItem('mealsToken', '1');
  localStorage.setItem('cocktailsToken', '1');
  localStorage.setItem('doneRecipes', '[]');
  localStorage.setItem('favoriteRecipes', '[]');
  localStorage.setItem('inProgressRecipes', '{}');
});

afterEach(() => {
  localStorage.clear();
});

describe(`82 - Implement the elements of the profile screen respecting the attributes 
described in the prototype`, () => {
  it('All the data-testid of the email and all the buttons', () => {
    const history = createMemoryHistory();
    renderWithRouterAndStore(<Profile history={ history } />, '/perfil');

    const profileEmail = screen.getByTestId('profile-email');
    const profileDoneBtn = screen.getByTestId('profile-done-btn');
    const profileFavoriteBtn = screen.getByTestId('profile-favorite-btn');
    const profileLogoutBtn = screen.getByTestId('profile-logout-btn');

    expect(profileEmail).toBeInTheDocument();
    expect(profileDoneBtn).toBeInTheDocument();
    expect(profileFavoriteBtn).toBeInTheDocument();
    expect(profileLogoutBtn).toBeInTheDocument();
  });
});
