import React from 'react';
import userEvent from '@testing-library/user-event';
import Explore from '../pages/explore/Explore';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';

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
  it('Testa botão comidas', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(),
    });
    const { findByText, findByTestId, getByRole } = renderWithRouterAndRedux(
      <Explore />,
      { route: '/explorar' }, INITIAL_STATE,
    );
    const type = await findByText(/comidas/i);
    const title = await findByTestId('page-title');
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    const Comidas = await getByRole('button', { name: /Comidas/i });
    expect(Comidas).toBeInTheDocument();
    userEvent.click(Comidas);
  });
  it('Testa botão comidas', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(),
    });
    const { findByText, findByTestId, getByRole } = renderWithRouterAndRedux(
      <Explore />,
      { route: '/explorar' }, INITIAL_STATE,
    );
    const type = await findByText(/comidas/i);
    const title = await findByTestId('page-title');
    const header = await findByTestId('profile-top-btn');
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    const Bebidas = await getByRole('button', { name: /Bebidas/i });
    expect(Bebidas).toBeInTheDocument();
    userEvent.click(Bebidas);
  });
  it('Testa botão Perfil', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(),
    });
    const { findByTestId } = renderWithRouterAndRedux(
      <Explore />,
      { route: '/explorar' }, INITIAL_STATE,
    );
    const header = await findByTestId('profile-top-btn');
    userEvent.click(header);
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
