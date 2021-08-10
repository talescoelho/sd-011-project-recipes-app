import React from 'react';
import ExploreByIngredientsDrinks from '../pages/explore/ExploreByIngredientsDrinks';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import mockDrinkIngredients from '../../cypress/mocks/drinkIngredients';

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
      json: jest.fn().mockResolvedValue(mockDrinkIngredients),
    });
    const { findByText, findByTestId } = renderWithRouterAndRedux(
      <ExploreByIngredientsDrinks />,
      { route: '/explorar/bebidas/ingredientes' }, INITIAL_STATE,
    );
    const type = await findByText(/Applejack/i);
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
