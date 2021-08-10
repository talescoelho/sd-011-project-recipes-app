// HomeMeals.test.js
import React from 'react';
import MealDetails from '../pages/MealDetails';
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

describe('Testes para página de HomeComidas', () => {
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMeal),
    });
    const { findByText, findByTestId } = renderWithRouterAndRedux(
      <MealDetails match={ { params: { id: '52771' } } } />,
      { route: '/comidas/52771' }, INITIAL_STATE,
    );
    const type = await findByText(/vegetarian/i);
    const title = await findByTestId('recipe-title');
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
  it('Verifica se há os itens procurados', () => {
    const { getByText } = renderWithRouterAndRedux(
      <MealDetails match={ { params: { id: '52771' } } } />,
      { route: '/comidas/52771' }, INITIAL_STATE,
    );

    const loading = getByText('Loading');
    expect(loading).toBeInTheDocument();
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
