import React from 'react';
import ExploreByIngredients from '../pages/explore/ExploreByIngredients';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import mockMealIngredients from '../../cypress/mocks/mealIngredients';

const INITIAL_STATE = {
  RecipesReducer: {
    recipesData: { meals: [] },
    recipeDetailsData: [],
    recipesRedirectData: [],
    isLoading: false,
    showRecipe: false,
  },
};

describe('Testes para página de Explorar comidas por ingrediente', () => {
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMealIngredients),
    });
    const { findByText, findByTestId } = renderWithRouterAndRedux(
      <ExploreByIngredients />,
      { route: '/explorar/comidas/ingredientes' }, INITIAL_STATE,
    );
    const type = await findByText(/Chicken/i);
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
