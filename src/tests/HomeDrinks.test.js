// HomeDrinks.test.js
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomeDrinks from '../pages/HomeDrinks';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import mockDrinks from '../../cypress/mocks/drinks';
import mockCategories from '../../cypress/mocks/drinkCategories';

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
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockDrinks),
    });
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockCategories),
    });
    const { findByText, findByTestId, store } = renderWithRouterAndRedux(
      <HomeDrinks location={ { state: '' } } />,
      { route: '/bebidas' }, INITIAL_STATE,
    );
    expect(store.getState()).not.toEqual(INITIAL_STATE);
    const exploreBtn = screen.getByTestId('explore-bottom-btn');
    expect(exploreBtn).toBeInTheDocument();
    const profileBtn = screen.getByTestId('profile-top-btn');
    expect(profileBtn).toBeInTheDocument();
    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toBeInTheDocument();
    const Footer = screen.getByTestId('drinks-bottom-btn');
    expect(Footer).toBeInTheDocument();
    const type = await findByText(/ABC/i);
    const title = await findByTestId('1-recipe-card');
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    const myStore = store.getState();
    const firstRecipe = myStore.RecipesReducer.recipesData.drinks[0];
    expect(firstRecipe.strDrink).toEqual('GG');
    expect(myStore).not.toEqual(INITIAL_STATE);
    const searchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchBtn);
    const searchIn = screen.getByTestId('search-input');
    const nameRadio = screen.getByTestId('name-search-radio');
    const ingredientRadio = screen.getByTestId('ingredient-search-radio');
    const letterRadio = screen.getByTestId('first-letter-search-radio');
    const findRecipeBtn = screen.getByTestId('exec-search-btn');
    expect(searchIn).toBeInTheDocument();
    expect(nameRadio).toBeInTheDocument();
    expect(findRecipeBtn).toBeInTheDocument();
    userEvent.type(searchIn, 'asdasdsada');
    userEvent.click(ingredientRadio);
    userEvent.click(letterRadio);
    userEvent.click(nameRadio);
    userEvent.click(findRecipeBtn);
    expect(store.getState()).not.toEqual(myStore);
    const categorie = await findByTestId('All-category-filter');
    userEvent.click(categorie);
  });
  it('Verifica os endpoints', async () => {
    jest.spyOn(global, 'fetch');
    const fetchDrinks = fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockDrinks),
    });
    const fetchCategories = fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockCategories),
    });
    const { findByText } = renderWithRouterAndRedux(
      <HomeDrinks location={ { state: '' } } />,
      { route: '/bebidas' }, INITIAL_STATE,
    );
    const recipeName = await findByText(/ABC/i);
    expect(recipeName).toBeInTheDocument();
    expect(fetchDrinks).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    expect(fetchCategories).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    expect(fetchDrinks).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=asdasdsada');
  });
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockDrinks),
    });
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockCategories),
    });
    const { findByText } = renderWithRouterAndRedux(
      <HomeDrinks location={ { state: '' } } />,
      { route: '/bebidas' }, INITIAL_STATE,
    );
    const All = await findByText(/All/i);
    expect(All).toBeInTheDocument();
    userEvent.click(All);
    const Ordinary = await findByText(/Ordinary Drink/i);
    expect(Ordinary).toBeInTheDocument();
    userEvent.click(Ordinary);
    const Cocktail = await findByText(/Cocktail/i);
    expect(Cocktail).toBeInTheDocument();
    userEvent.click(Cocktail);
    const Milk = await findByText(/Milk/i);
    expect(Milk).toBeInTheDocument();
    userEvent.click(Milk);
    const Other = await findByText(/Other/i);
    expect(Other).toBeInTheDocument();
    userEvent.click(Other);
    const Cocoa = await findByText(/Cocoa/i);
    expect(Cocoa).toBeInTheDocument();
    userEvent.click(Cocoa);
    const card = await findByText(/GG/i);
    userEvent.click(card);
  });
  it('Verifica se chama o endpoint correto', async () => {
    jest.spyOn(global, 'fetch');
    const fetchIngredientDrinks = fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockDrinks),
    });
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockCategories),
    });
    renderWithRouterAndRedux(
      <HomeDrinks location={ { state: 'vodka' } } location2={ { state: 'vodka' } } />,
      { route: '/bebidas' }, INITIAL_STATE,
    );
    expect(fetchIngredientDrinks).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=vodka');
  });
  it('Verifica Loading', () => {
    const { getAllByText } = renderWithRouterAndRedux(
      <HomeDrinks location={ { state: '' } } />,
      { route: '/bebidas' }, INITIAL_STATE,
    );
    const loadings = getAllByText(/loading/i);
    expect(loadings[0]).toBeInTheDocument();
    expect(loadings.length).toBe(1);
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />
