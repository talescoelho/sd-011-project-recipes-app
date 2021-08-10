// Login.test.js
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetchMock from 'fetch-mock-jest';
import App from '../App';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import mockMeals from '../../cypress/mocks/meals';

describe('Testes para página de HomeComidas', () => {
  it('Verifica se há um campo para o email', () => {
    const { history, store } = renderWithRouterAndRedux(<App />, {
      recipesReducer: {
        recipesData: { meals: [] },
        recipeDetailsData: ['asdadas'],
        recipesRedirectData: [],
        isLoading: false,
        showRecipe: false,
      },
    }, ['/comidas']);
    console.log(history.location.pathname);
    console.log(store.getState());
    // fetchMock.getOnce('https://www.themealdb.com/api/json/v1/1/search.php?s=', mockMeals);
    // console.log(mockMeals);
    // const emailField = screen.getByTestId('email-input');
    // userEvent.type(emailField, 'arthurhermann@hotmail.com');
    // const passwordField = screen.getByTestId('password-input');
    // userEvent.type(passwordField, '123456789');
    // const button = screen.getByTestId('login-submit-btn');
    // userEvent.click(button);

    const emailField = screen.getByTestId('email-asdas');
    console.log(history.location.pathname);
  });
});

// const emailField = getByTestId('email-input');
//     userEvent.type(emailField, 'arthurhermann@hotmail.com');
//     const passwordField = getByTestId('password-input');
//     userEvent.type(passwordField, '123456789');
//     const button = getByTestId('login-submit-btn');
//     userEvent.click(button);
//     const All = getByTestId('footer');
//     expect(All).toBeInTheDocument();
