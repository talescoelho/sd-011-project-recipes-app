import React from 'react';
import userEvent from '@testing-library/user-event';
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

const twelveCards = 12;

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
    const card1 = await findByTestId('0-card-name');
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    userEvent.click(card1);
  });
  it('Verifica qtd de cards', async () => {
    jest.spyOn(global, 'fetch');
    const ingredients = fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMealIngredients),
    });
    const { findAllByRole, history } = renderWithRouterAndRedux(
      <ExploreByIngredients />,
      { route: '/explorar/comidas/ingredientes' }, INITIAL_STATE,
    );
    const allcards = await findAllByRole('button', { name: /oi/i });
    expect(allcards.length).toEqual(twelveCards);
    allcards.forEach((card) => {
      userEvent.click(card);
    });
    expect(ingredients).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    expect(history.location.pathname).toEqual('/comidas');
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
