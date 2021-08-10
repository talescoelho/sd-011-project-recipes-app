import React from 'react';
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

describe('Testes para página de Explorar bebidas', () => {
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAreas),
    });
    const { findByText, findByTestId } = renderWithRouterAndRedux(
      <ExploreDrinks />,
      { route: '/explorar/bebidas' }, INITIAL_STATE,
    );
    const type = await findByText(/Me Surpreenda/i);
    const title = await findByTestId('page-title');
    const header = await findByTestId('profile-top-btn');
    const surpriseBtn = await findByTestId('explore-surprise');
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(surpriseBtn).toBeInTheDocument();
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
