import React from 'react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './tests/renderWithRouterAndRedux';
import App from './App';

const INITIAL_STATE = {
  RecipesReducer: {
    recipesData: { meals: [] },
    recipeDetailsData: [],
    recipesRedirectData: [],
    isLoading: false,
    showRecipe: false,
  },
};

test('Farewell, front-end', () => {
  const { getByText, getByTestId, history } = renderWithRouterAndRedux(
    <App />,
    { route: '/' }, INITIAL_STATE,
  );
  const type = getByText(/Login/i);
  const email = getByTestId('email-input');
  const password = getByTestId('password-input');
  const loginBtn = getByTestId('login-submit-btn');
  expect(type).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(loginBtn).toBeInTheDocument();
  expect(loginBtn).toHaveAttribute('disabled');
  userEvent.type(email, 'arthurhermann@hotmail.com');
  userEvent.type(password, '123456789');
  expect(loginBtn).not.toHaveAttribute('disabled');
  userEvent.click(loginBtn);
  const { pathname } = history.location;
  expect(pathname).toEqual('/');
  expect(localStorage.mealsToken).toEqual('1');
  expect(localStorage.cocktailsToken).toEqual('1');
  expect(JSON.parse(localStorage.user)).toEqual({ email: 'arthurhermann@hotmail.com' });
});
