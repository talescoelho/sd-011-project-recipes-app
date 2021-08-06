import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
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

describe(`86 - Redirect the user that, when clicking on the "Receitas Feitas" button, the 
route should change to the recipes made screen`, () => {
  it('', () => {
    const history = createMemoryHistory();
    const { history: historyRoute } = renderWithRouterAndStore(
      <Profile history={ history } />, '/perfil',
    );

    const profileFavoriteBtn = screen.getByTestId('profile-favorite-btn');
    fireEvent.click(profileFavoriteBtn);

    const { location: { pathname } } = historyRoute;
    expect(pathname).toBe('/receitas-favoritas');
  });
});
