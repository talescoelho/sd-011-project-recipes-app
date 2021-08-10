import React from 'react';
import MealsInProgress from '../pages/MealsInProgress';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import mockMeal from '../../cypress/mocks/oneMeal';

const INITIAL_STATE = {
  RecipesReducer: {
    recipesData: { meals: [] },
    recipeDetailsData: [],
    recipesRedirectData: [],
    isLoading: false,
    showRecipe: false,
  },
};

describe('Testes para página de Comidas em Progresso', () => {
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMeal),
    });
    const { findByText, findByTestId } = renderWithRouterAndRedux(
      <MealsInProgress
        match={ { params: { id: '52771' }, url: '/comidas/52771/in-progress' } }
      />,
      { route: '/comidas/52771/in-progress' }, INITIAL_STATE,
    );
    const type = await findByText(/vegetarian/i);
    const title = await findByTestId('recipe-title');
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
