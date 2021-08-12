// HomeMeals.test.js
import React from 'react';
import userEvent from '@testing-library/user-event';
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

const mockRoute = '/bebidas/178319';

describe('Testes para página de HomeBebidas', () => {
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockMeals),
    });
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockDrink),
    });
    const { findByText, findByTestId, getByRole, getByTitle } = renderWithRouterAndRedux(
      <DrinkDetails match={ { params: { id: '178319' } } } />,
      { route: mockRoute }, INITIAL_STATE,
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
  it('Verifica os endpoints chamados', async () => {
    jest.spyOn(global, 'fetch');
    const allMeals = fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockMeals),
    });
    const drinkDetail = fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockDrink),
    });
    const { history } = renderWithRouterAndRedux(
      <DrinkDetails match={ { params: { id: '178319' } } } />,
      { route: mockRoute }, INITIAL_STATE,
    );
    expect(history.location.pathname).toEqual('/bebidas/178319');
    expect(allMeals).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    expect(drinkDetail).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178319');
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />
