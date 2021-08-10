import React from 'react';
import ExploreRecipes from '../pages/explore/ExploreRecipes';
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

describe('Testes para página de Explorar comidas', () => {
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAreas),
    });
    const { findByText, findByTestId } = renderWithRouterAndRedux(
      <ExploreRecipes />,
      { route: '/explorar/comidas' }, INITIAL_STATE,
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
