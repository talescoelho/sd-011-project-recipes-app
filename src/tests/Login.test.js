import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import HomeRecipe from '../pages/HomeRecipe';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import mockMeals from '../../cypress/mocks/meals';

const INITIAL_STATE = {
  RecipesReducer: {
    recipesData: { meals: [] },
    recipeDetailsData: [],
    recipesRedirectData: [],
    isLoading: false,
    showRecipe: false,
  },
};

describe('Testes para página de Explorar comidas', () => {
  it('Verifica não há chaves', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMeals),
    });
    renderWithRouterAndRedux(
      <Login />,
      { route: '/' }, INITIAL_STATE,
    );
    expect(window.localStorage.getItem('mealsToken')).toBe(null);
    expect(window.localStorage.getItem('cocktailsToken')).toBe(null);
  });
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMeals),
    });
    const { findByText, findByTestId, history } = renderWithRouterAndRedux(
      <Login />,
      { route: '/' }, INITIAL_STATE,
    );
    const type = await findByText(/Login/i);
    const email = await findByTestId('email-input');
    const password = await findByTestId('password-input');
    const loginBtn = await findByTestId('login-submit-btn');
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
    expect(pathname).toEqual('/comidas');
    expect(localStorage.mealsToken).toEqual('1');
    expect(localStorage.cocktailsToken).toEqual('1');
    expect(JSON.parse(localStorage.user)).toEqual({ email: 'arthurhermann@hotmail.com' });

    renderWithRouterAndRedux(
      <HomeRecipe location={ { state: '' } } />,
      { route: '/comidas' }, INITIAL_STATE,
    );
    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toBeInTheDocument();
  });
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMeals),
    });
    const { findByText, findByTestId } = renderWithRouterAndRedux(
      <Login />,
      { route: '/' }, INITIAL_STATE,
    );
    const type = await findByText(/Login/i);
    const email = await findByTestId('email-input');
    const password = await findByTestId('password-input');
    const loginBtn = await findByTestId('login-submit-btn');
    expect(type).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
    expect(loginBtn).toHaveAttribute('disabled');
    userEvent.type(email, 'arthurn@hotmail.com');
    userEvent.type(password, '19');
    expect(loginBtn).toHaveAttribute('disabled');
    renderWithRouterAndRedux(
      <HomeRecipe location={ { state: '' } } />,
      { route: '/comidas' }, INITIAL_STATE,
    );
    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toBeInTheDocument();
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
