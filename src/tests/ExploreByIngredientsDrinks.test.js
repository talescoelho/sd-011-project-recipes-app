import React from 'react';
import userEvent from '@testing-library/user-event';
import ExploreByIngredientsDrinks from '../pages/explore/ExploreByIngredientsDrinks';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import mockDrinkIngredients from '../../cypress/mocks/drinkIngredients';
import mockdrinksByingredients from '../../cypress/mocks/drinksByIngredient';
import HomeDrinks from '../pages/HomeDrinks';

const INITIAL_STATE = {
  RecipesReducer: {
    recipesData: { meals: [] },
    recipeDetailsData: [],
    recipesRedirectData: [],
    isLoading: false,
    showRecipe: false,
  },
};

const mockUrl = '/explorar/bebidas/ingredientes';

const thirteenCards = 13;

describe('Testes para página de Explorar comidas por ingrediente', () => {
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockDrinkIngredients),
    });
    const { findByText, findByTestId } = renderWithRouterAndRedux(
      <ExploreByIngredientsDrinks />,
      { route: mockUrl }, INITIAL_STATE,
    );
    const type = await findByText(/Applejack/i);
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
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockDrinkIngredients),
    });
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockDrinkIngredients),
    });
    const { findAllByRole, findByText } = renderWithRouterAndRedux(
      <ExploreByIngredientsDrinks />,
      { route: mockUrl }, INITIAL_STATE,
    );
    const type = await findByText(/Applejack/i);
    const allcards = await findAllByRole('heading', { level: 2 });
    expect(type).toBeInTheDocument();
    expect(allcards.length).toEqual(thirteenCards);
    allcards.forEach((card) => {
      userEvent.click(card);
    });
  });
  it('Verifica redirecionamento', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockDrinkIngredients),
    });
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockdrinksByingredients),
    });
    const { history, findByText } = renderWithRouterAndRedux(
      <ExploreByIngredientsDrinks />,
      { route: mockUrl }, INITIAL_STATE,
    );
    const type = await findByText(/Applejack/i);
    userEvent.click(type);
    const currentUrl = history.location.pathname;
    const curretnstate = history.location.state;
    expect(currentUrl).toEqual('/bebidas');
    renderWithRouterAndRedux(
      <HomeDrinks location={ { state: curretnstate } } />,
      { route: '/bebidas' }, INITIAL_STATE,
    );
    await findByText(/Applejack/i);
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
