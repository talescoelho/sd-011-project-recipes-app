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

describe(`85 - Redirect the user that, when clicking on the "Receitas Favoritas" button, 
the route should change to the favorite recipes screen`, () => {
  it('Redirects to correct route', () => {
    const history = createMemoryHistory();
    const { history: historyRoute } = renderWithRouterAndStore(
      <Profile history={ history } />, '/perfil',
    );

    const profileDoneBtn = screen.getByTestId('profile-done-btn');
    fireEvent.click(profileDoneBtn);

    const { location: { pathname } } = historyRoute;
    expect(pathname).toBe('/receitas-feitas');
  });
});
