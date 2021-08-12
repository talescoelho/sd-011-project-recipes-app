import React from 'react';
import userEvent from '@testing-library/user-event';
import HomeRecipe from '../pages/HomeRecipe';
import HomeDrinks from '../pages/HomeDrinks';
import Footer from '../components/footer/Footer';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import mockDrinks from '../../cypress/mocks/drinks';
import mockMeals from '../../cypress/mocks/meals';
import Explore from '../pages/explore/Explore';

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
  it('Verifica se há os itens', async () => {
    jest.spyOn(global, 'fetch');
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockMeals),
    });
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockDrinks),
    });
    const { findByTestId } = renderWithRouterAndRedux(
      <Footer />,
      { route: '' }, INITIAL_STATE,
    );
    const footer = await findByTestId('footer');
    expect(footer).toBeInTheDocument();
  });
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockDrinks),
    });
    const { history, findByTestId } = renderWithRouterAndRedux(
      <Footer />,
      { route: '' }, INITIAL_STATE,
    );
    const bebidas = await findByTestId('drinks-bottom-btn');
    expect(bebidas).toBeInTheDocument();
    userEvent.click(bebidas);
    expect(history.location.pathname).toEqual('/bebidas');
    renderWithRouterAndRedux(
      <HomeDrinks location={ { state: '' } } />,
      { route: '/bebidas' }, INITIAL_STATE,
    );
  });
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockMeals),
    });
    const { history, findByTestId } = renderWithRouterAndRedux(
      <Footer />,
      { route: '' }, INITIAL_STATE,
    );
    const comidas = await findByTestId('food-bottom-btn');
    expect(comidas).toBeInTheDocument();
    userEvent.click(comidas);
    expect(history.location.pathname).toEqual('/comidas');
    renderWithRouterAndRedux(
      <HomeRecipe location={ { state: '' } } />,
      { route: '/comidas' }, INITIAL_STATE,
    );
  });
  it('Verifica explorar', async () => {
    jest.spyOn(global, 'fetch');
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockMeals),
    });
    const { history, findByTestId } = renderWithRouterAndRedux(
      <Footer />,
      { route: '' }, INITIAL_STATE,
    );
    const explore = await findByTestId('explore-bottom-btn');
    expect(explore).toBeInTheDocument();
    userEvent.click(explore);
    expect(history.location.pathname).toEqual('/explorar');
    renderWithRouterAndRedux(
      <Explore location={ { state: '' } } />,
      { route: '/explorar' }, INITIAL_STATE,
    );
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
