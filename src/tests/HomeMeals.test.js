// Login.test.js
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetchMock from 'fetch-mock-jest';
import Explore from '../pages/explore/Explore';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import mockMeals from '../../cypress/mocks/meals';

const INITIAL_STATE = {
  recipesReducer: {
    recipesData: { meals: [] },
    recipeDetailsData: ['asdadas'],
    recipesRedirectData: [],
    isLoading: false,
    showRecipe: false,
  },
}

describe('Testes para página de HomeComidas', () => {
  it('Verifica se há um campo para o email', () => {
    const { history, store } = renderWithRouterAndRedux(<Explore />, '/comidas/52977', INITIAL_STATE);
    history.push('/comidas');
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
