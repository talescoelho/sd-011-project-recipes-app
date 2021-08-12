import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react';
import ExploreByLocal from '../pages/explore/ExploreByLocal';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import mockAreas from '../../cypress/mocks/areas';
import mockMealsByLocal from '../../cypress/mocks/italianMeals';

const INITIAL_STATE = {
  RecipesReducer: {
    recipesData: { meals: [] },
    recipeDetailsData: [],
    recipesRedirectData: [],
    isLoading: false,
    showRecipe: false,
  },
};

const cardid = '0-card-img';
const mockurl = '/explorar/bebidas/area';

describe('Testes para página de Explorar comidas e bebidas por local', () => {
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockMealsByLocal),
    });
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockAreas),
    });
    const { findByText, findByTestId } = renderWithRouterAndRedux(
      <ExploreByLocal />,
      { route: '/explorar/comidas/area' }, INITIAL_STATE,
    );
    const type = await findByText(/French/i);
    const title = await findByTestId('page-title');
    const header = await findByTestId('profile-top-btn');
    const card1 = await findByTestId(cardid);
    expect(type).toBeInTheDocument();
    expect(card1).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    const select = await findByTestId('explore-by-area-dropdown');
    fireEvent.change(select, { target: { value: 'American' } });
    mockAreas.meals.forEach((option) => {
      fireEvent.change(select, { target: { value: option.strArea } });
    });
    const newCard1 = await findByTestId(cardid);
    fireEvent.click(newCard1);
  });
  it('2', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAreas),
    });
    const { findByTestId, getByTestId } = renderWithRouterAndRedux(
      <ExploreByLocal />,
      { route: mockurl }, INITIAL_STATE,
    );
    const searchbtn = await findByTestId('search-top-btn');
    userEvent.click(searchbtn);
    const searchIn = await findByTestId('search-input');
    const ingredientRadio = getByTestId('ingredient-search-radio');
    const nameRadio = getByTestId('name-search-radio');
    const firstLett = getByTestId('first-letter-search-radio');
    const find = getByTestId('exec-search-btn');
    userEvent.type(searchIn, 'vodka');
    userEvent.click(ingredientRadio);
    userEvent.click(nameRadio);
    userEvent.click(firstLett);
    userEvent.click(find);
  });
  it('3', async () => {
    jest.spyOn(global, 'fetch');
    fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAreas),
    });
    const alertMock = jest.spyOn(window, 'alert');
    const { findByTestId } = renderWithRouterAndRedux(
      <ExploreByLocal />,
      { route: mockurl }, INITIAL_STATE,
    );
    const searchbtn = await findByTestId('search-top-btn');
    userEvent.click(searchbtn);
    const searchIn = await findByTestId('search-input');
    const firstLetter = await findByTestId('first-letter-search-radio');
    const findRecipeBtn = await findByTestId('exec-search-btn');
    userEvent.type(searchIn, 'pizza');
    userEvent.click(firstLetter);
    userEvent.click(findRecipeBtn);
    expect(alertMock).toHaveBeenCalledTimes(1);
  });
  it('Verifica o searchbar', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAreas),
    });
    const { findByText, findByTestId } = renderWithRouterAndRedux(
      <ExploreByLocal />,
      { route: mockurl }, INITIAL_STATE,
    );
    const type = await findByText(/french/i);
    const title = await findByTestId('page-title');
    const header = await findByTestId('profile-top-btn');
    expect(type).toBeInTheDocument();
    expect(title.innerHTML).toEqual('Explorar Origem');
    expect(header).toBeInTheDocument();
  });
  it('Verifica card1', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAreas),
    });
    const { findByTestId } = renderWithRouterAndRedux(
      <ExploreByLocal />,
      { route: mockurl }, INITIAL_STATE,
    );
    const card1 = await findByTestId(cardid);
    userEvent.click(card1);
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
