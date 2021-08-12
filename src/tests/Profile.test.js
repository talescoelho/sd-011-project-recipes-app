import React from 'react';
import userEvent from '@testing-library/user-event';
import Profile from '../pages/Profile';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import mockDrink from '../../cypress/mocks/oneDrink';

const INITIAL_STATE = {
  RecipesReducer: {
    recipesData: { meals: [] },
    recipeDetailsData: [],
    recipesRedirectData: [],
    isLoading: false,
    showRecipe: false,
  },
};

describe('Testes para página de Perfil', () => {
  it('Verifica ao clicar em fav', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockDrink),
    });
    const { findByText, findByTestId, getByRole } = renderWithRouterAndRedux(
      <Profile />,
      { route: '/perfil' }, INITIAL_STATE,
    );
    const type = await findByText(/Receitas Favoritas/i);
    const title = await findByTestId('page-title');
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    const RFavoritas = await getByRole('button', { name: /Receitas Favoritas/i });
    expect(RFavoritas).toBeInTheDocument();
    userEvent.click(RFavoritas);
  });
  it('Verifica ao clicar em feitas', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockDrink),
    });
    const { findByText, getByRole } = renderWithRouterAndRedux(
      <Profile />,
      { route: '/perfil' }, INITIAL_STATE,
    );
    const type = await findByText(/Receitas Favoritas/i);
    expect(type).toBeInTheDocument();
    const RFeitas = await getByRole('button', { name: /Receitas Feitas/i });
    expect(RFeitas).toBeInTheDocument();
    userEvent.click(RFeitas);
  });
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockDrink),
    });
    const { findByText, findByTestId, history } = renderWithRouterAndRedux(
      <Profile />,
      { route: '/perfil' }, INITIAL_STATE,
    );
    const type = await findByText(/Receitas Favoritas/i);
    const title = await findByTestId('page-title');
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    const sair = await findByTestId('profile-logout-btn');
    expect(sair).toBeInTheDocument();
    userEvent.click(sair);
    expect(history.location.pathname).toBe('/');
    expect(window.localStorage.getItem('mealsToken')).toBe(null);
    expect(window.localStorage.getItem('cocktailsToken')).toBe(null);
  });
  it('Verifica ao bebidas footer', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockDrink),
    });
    const { findByText, getByRole } = renderWithRouterAndRedux(
      <Profile />,
      { route: '/perfil' }, INITIAL_STATE,
    );
    const type = await findByText(/Receitas Favoritas/i);
    expect(type).toBeInTheDocument();
    const bebidas = await getByRole('img', { name: /símbolo bebida/i });
    expect(bebidas).toBeInTheDocument();
    userEvent.click(bebidas);
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
