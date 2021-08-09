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

describe(`84 - Implement 3 buttons: one named "Receitas Feitas", one named "Receitas 
Favoritas" and one named "Sair"`, () => {
  it('The screen contains all 3 buttons.', () => {
    const history = createMemoryHistory();
    renderWithRouterAndStore(<Profile history={ history } />, '/perfil');

    const profileDoneBtn = screen.getByTestId('profile-done-btn');
    const profileFavoriteBtn = screen.getByTestId('profile-favorite-btn');
    const profileLogoutBtn = screen.getByTestId('profile-logout-btn');

    expect(profileDoneBtn).toBeInTheDocument();
    expect(profileDoneBtn).toHaveTextContent('Receitas Feitas');
    expect(profileFavoriteBtn).toBeInTheDocument();
    expect(profileFavoriteBtn).toHaveTextContent('Receitas Favoritas');
    expect(profileLogoutBtn).toBeInTheDocument();
    expect(profileLogoutBtn).toHaveTextContent('Sair');
  });
});
