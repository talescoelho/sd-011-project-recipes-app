// HomeMeals.test.js
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomeRecipe from '../pages/HomeRecipe';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import mockMeals from '../../cypress/mocks/meals';
import mockCategories from '../../cypress/mocks/mealCategories';

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
      json: jest.fn().mockResolvedValue(mockMeals),
    });
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockCategories),
    });
    const { findByText, findByTestId, store } = renderWithRouterAndRedux(
      <HomeRecipe location={ { state: '' } } />,
      { route: '/comidas' }, INITIAL_STATE,
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
    const type = await findByText(/Dal fry/i);
    const title = await findByTestId('1-recipe-card');
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    const myStore = store.getState();
    const firstRecipe = myStore.RecipesReducer.recipesData.meals[0];
    expect(firstRecipe.strMeal).toEqual('Corba');
    expect(myStore).not.toEqual(INITIAL_STATE);
    const searchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchBtn);
    const searchIn = screen.getByTestId('search-input');
    const nameRadio = screen.getByTestId('name-search-radio');
    const findRecipeBtn = screen.getByTestId('exec-search-btn');
    expect(searchIn).toBeInTheDocument();
    expect(nameRadio).toBeInTheDocument();
    expect(findRecipeBtn).toBeInTheDocument();
    userEvent.type(searchIn, 'asdasdsada');
    userEvent.click(nameRadio);
    userEvent.click(findRecipeBtn);
    const categorie = await findByTestId('All-category-filter');
    userEvent.click(categorie);
  });
  it('Verifica os endpoints', async () => {
    jest.spyOn(global, 'fetch');
    const fetchMeals = fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockMeals),
    });
    const fetchCategories = fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockCategories),
    });
    const { findByText } = renderWithRouterAndRedux(
      <HomeRecipe location={ { state: '' } } />,
      { route: '/comidas' }, INITIAL_STATE,
    );
    const recipeName = await findByText(/Dal fry/i);
    expect(recipeName).toBeInTheDocument();
    expect(fetchMeals).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    expect(fetchCategories).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    expect(fetchMeals).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?s=asdasdsada');
  });
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockMeals),
    });
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockCategories),
    });
    const { findByText } = renderWithRouterAndRedux(
      <HomeRecipe location={ { state: '' } } />,
      { route: '/comidas' }, INITIAL_STATE,
    );
    const All = await findByText(/All/i);
    expect(All).toBeInTheDocument();
    userEvent.click(All);
    const Beef = await findByText(/Beef/i);
    expect(Beef).toBeInTheDocument();
    userEvent.click(Beef);
    const Breakfast = await findByText(/Breakfast/i);
    expect(Breakfast).toBeInTheDocument();
    userEvent.click(Breakfast);
    const Chicken = await findByText(/Chicken/i);
    expect(Chicken).toBeInTheDocument();
    userEvent.click(Chicken);
    const Dessert = await findByText(/Dessert/i);
    expect(Dessert).toBeInTheDocument();
    userEvent.click(Dessert);
    const Goat = await findByText(/Goat/i);
    expect(Goat).toBeInTheDocument();
    userEvent.click(Goat);
    const card = await findByText(/Corba/i);
    userEvent.click(card);
  });
  it('Verifica se chama o endpoint correto', async () => {
    jest.spyOn(global, 'fetch');
    const fetchIngredientMeals = fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockMeals),
    });
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockCategories),
    });
    renderWithRouterAndRedux(
      <HomeRecipe location={ { state: 'chicken' } } location2={ { state: 'chicken' } } />,
      { route: '/comidas' }, INITIAL_STATE,
    );
    expect(fetchIngredientMeals).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken');
  });
  it('Verifica Loading', () => {
    const { getAllByText } = renderWithRouterAndRedux(
      <HomeRecipe location={ { state: '' } } />,
      { route: '/comidas' }, INITIAL_STATE,
    );
    const loadings = getAllByText(/loading/i);
    expect(loadings[0]).toBeInTheDocument();
    expect(loadings.length).toBe(2);
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />
