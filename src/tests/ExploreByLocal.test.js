import React from 'react';
import ExploreByLocal from '../pages/explore/ExploreByLocal';
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

describe('Testes para página de Explorar comidas e bebidas por local', () => {
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAreas),
    });
    const { findByText, findByTestId } = renderWithRouterAndRedux(
      <ExploreByLocal />,
      { route: '/explorar/comidas/area' }, INITIAL_STATE,
    );
    const type = await findByText(/French/i);
    const title = await findByTestId('page-title');
    const header = await findByTestId('profile-top-btn');
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(header).toBeInTheDocument();
  });
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAreas),
    });
    const { findByText, findByTestId } = renderWithRouterAndRedux(
      <ExploreByLocal />,
      { route: '/explorar/bebidas/area' }, INITIAL_STATE,
    );
    const type = await findByText(/french/i);
    const title = await findByTestId('page-title');
    const header = await findByTestId('profile-top-btn');
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(header).toBeInTheDocument();
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
