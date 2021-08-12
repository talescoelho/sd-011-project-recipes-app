import React from 'react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../components/SearchBar';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import mockPizza from './mockPizza';
import mockNull from '../../cypress/mocks/emptyMeals';

const INITIAL_STATE = {
  RecipesReducer: {
    recipesData: { meals: [] },
    recipeDetailsData: [],
    recipesRedirectData: [],
    isLoading: false,
    showRecipe: false,
  },
};

describe('Testes para Footer', () => {
  it('Verifica searchBar', async () => {
    jest.spyOn(global, 'fetch');
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockPizza),
    });
    const { findByTestId, findByText, store } = renderWithRouterAndRedux(
      <SearchBar />,
      { route: '/' }, INITIAL_STATE,
    );
    const searchIn = await findByTestId('search-input');
    const nameRadio = await findByTestId('name-search-radio');
    const findRecipeBtn = await findByTestId('exec-search-btn');
    expect(searchIn).toBeInTheDocument();
    expect(nameRadio).toBeInTheDocument();
    expect(findRecipeBtn).toBeInTheDocument();
    userEvent.type(searchIn, 'pizza');
    userEvent.click(nameRadio);
    userEvent.click(findRecipeBtn);
    const text = await findByText('Buscar');
    expect(text).toBeInTheDocument();
    const myStore = store.getState();
    expect(myStore).not.toEqual(INITIAL_STATE);
  });
  it('Verifica searchBar', async () => {
    jest.spyOn(global, 'fetch');
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockNull),
    });
    const alertMock = jest.spyOn(window, 'alert');
    const { findByTestId } = renderWithRouterAndRedux(
      <SearchBar />,
      { route: '/' }, INITIAL_STATE,
    );
    const searchIn = await findByTestId('search-input');
    const firstLetter = await findByTestId('first-letter-search-radio');
    const findRecipeBtn = await findByTestId('exec-search-btn');
    userEvent.type(searchIn, 'pizza');
    userEvent.click(firstLetter);
    userEvent.click(findRecipeBtn);
    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
