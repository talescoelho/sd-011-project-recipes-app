import React from 'react';
import userEvent from '@testing-library/user-event';
import ExploreDrinks from '../pages/explore/ExploreDrinks';
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

const mockRoute = '/explorar/bebidas';

describe('Testes para página de Explorar bebidas', () => {
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAreas),
    });
    const { findByText, findByTestId } = renderWithRouterAndRedux(
      <ExploreDrinks />,
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
      <ExploreDrinks />,
      { route: mockRoute }, INITIAL_STATE,
    );
    const ingredientes = await findByText(/por ingredientes/i);
    expect(ingredientes).toBeInTheDocument();
    userEvent.click(ingredientes);
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
