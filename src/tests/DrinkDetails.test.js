// HomeMeals.test.js
import React from 'react';
import DrinkDetails from '../pages/DrinkDetails';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import mockDrink from '../../cypress/mocks/oneDrink';
import mockMeals from '../../cypress/mocks/meals';

const INITIAL_STATE = {
  RecipesReducer: {
    recipesData: { meals: [] },
    recipeDetailsData: [],
    recipesRedirectData: [],
    isLoading: false,
    showRecipe: false,
  },
};

describe('Testes para página de HomeBebidas', () => {
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockMeals),
    });
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockDrink),
    });
    const { findByText, findByTestId } = renderWithRouterAndRedux(
      <DrinkDetails match={ { params: { id: '178319' } } } />,
      { route: '/bebidas/178319' }, INITIAL_STATE,
    );

    const type = await findByText(/Alcoholic/i);
    const title = await findByTestId('recipe-title');
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    const favorite = await findByTestId('favorite-btn');
    expect(favorite).toBeInTheDocument();
    const whiteIcon = getByRole('img', { name: /favorite icon/i });
    expect(whiteIcon.src).toEqual('http://localhost/whiteHeartIcon.svg');
    expect(whiteIcon).toBeInTheDocument();
    userEvent.click(favorite);
    const blackIcon = getByRole('img', { name: /favorite icon/i });
    expect(blackIcon.src).toEqual('http://localhost/blackHeartIcon.svg');
    const firstIngredient = await findByTestId('0-ingredient-name-and-measure');
    expect(firstIngredient).toBeInTheDocument();
    const recomendaitonCard1 = await findByTestId('1-recomendation-card');
    expect(getByTitle(/recipe video/i)).not.toBeInTheDocument();
    expect(recomendaitonCard1).toBeInTheDocument();
    userEvent.click(recomendaitonCard1);
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />
