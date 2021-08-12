import React from 'react';
import userEvent from '@testing-library/user-event';
import ExploreRecipes from '../pages/explore/ExploreRecipes';
import Profile from '../pages/Profile';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import mockAreas from '../../cypress/mocks/areas';

const INITIAL_STATE = {
  RecipesReducer: {
    recipesData: { meals: [] },
    recipeDetailsData: [],
    recipesRedirectData: [],
    isLoading: false,
    showRecipe: false,
  },
};

const mockRoute = '/explorar/comidas';

describe('Testes para página de Explorar comidas', () => {
  it('Verifica surpresa', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAreas),
    });
    const { findByText, findByTestId } = renderWithRouterAndRedux(
      <ExploreRecipes />,
      { route: mockRoute }, INITIAL_STATE,
    );
    const surpreenda = await findByText(/Me Surpreenda/i);
    const title = await findByTestId('page-title');
    const surpriseBtn = await findByTestId('explore-surprise');
    expect(surpreenda).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(surpriseBtn).toBeInTheDocument();
    userEvent.click(surpriseBtn);
  });
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAreas),
    });
    const { findByText } = renderWithRouterAndRedux(
      <ExploreRecipes />,
      { route: mockRoute }, INITIAL_STATE,
    );
    const local = await findByText(/por local/i);
    expect(local).toBeInTheDocument();
    userEvent.click(local);
  });
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAreas),
    });
    const { findByText } = renderWithRouterAndRedux(
      <ExploreRecipes />,
      { route: mockRoute }, INITIAL_STATE,
    );
    const ingredientes = await findByText(/por ingredientes/i);
    expect(ingredientes).toBeInTheDocument();
    userEvent.click(ingredientes);
  });
  it('Verifica clicar no perfil', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAreas),
    });
    const { getByTestId } = renderWithRouterAndRedux(
      <ExploreRecipes />,
      { route: mockRoute }, INITIAL_STATE,
    );
    const perfil = getByTestId('profile-top-btn');
    userEvent.click(perfil);
    const { getByText } = renderWithRouterAndRedux(
      <Profile />,
      { route: mockRoute }, INITIAL_STATE,
    );
    const title = getByText('Perfil');
    expect(title).toBeInTheDocument();
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
