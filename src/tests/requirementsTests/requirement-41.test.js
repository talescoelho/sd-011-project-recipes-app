import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';
import * as requestMenu from '../../services/requestMenu';
import mealsFiltersByAll from '../mocks/meals/mockFilterMealsByAll';
import mealRecipeDetails from '../mocks/meals/mockMealRecipeDetails';
import drinksFiltersByAll from '../mocks/drinks/mockFilterDrinksByAll';
import drinkRecipeDetails from '../mocks/drinks/mockDrinkRecipeDetails';

const mockMealPath = '/comidas/52977';
const mockMealsMatch = { params: { id: '52977' }, url: '/comidas/52977' };

const mockDrinkPath = '/bebidas/15997';
const mockDrinkMatch = { params: { id: '15997' }, url: '/bebidas/15997' };

jest
  .spyOn(requestMenu, 'searchMealByName')
  .mockImplementation(() => Promise.resolve(mealsFiltersByAll));

jest
  .spyOn(requestMenu, 'searchDrinkByName')
  .mockImplementation(() => Promise.resolve(drinksFiltersByAll));

jest
  .spyOn(requestMenu, 'mealsRecipeDetails')
  .mockImplementation(() => Promise.resolve(mealRecipeDetails));

jest
  .spyOn(requestMenu, 'drinksRecipeDetails')
  .mockImplementation(() => Promise.resolve(drinkRecipeDetails));

afterEach(() => jest.clearAllMocks());
beforeEach(() => jest.clearAllMocks());

describe(`41 - Redirect the user person if the "Iniciar Receita" button is clicked, the 
route should change to the recipe in process screen`, () => {
  it('Redirects to food recipe screen in process', () => {
    const { history } = renderWithRouterAndStore(
      <FoodDetails match={ mockMealsMatch } />, mockMealPath,
    );

    const startRecipeBtn = screen.getByTestId('start-recipe-btn');
    fireEvent.click(startRecipeBtn);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/comidas/52977/in-progress');
  });

  it('Redirects to drink recipe screen in process', () => {
    const { history } = renderWithRouterAndStore(
      <DrinkDetails match={ mockDrinkMatch } />, mockDrinkPath,
    );

    const startRecipeBtn = screen.getByTestId('start-recipe-btn');
    fireEvent.click(startRecipeBtn);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/bebidas/15997/in-progress');
  });
});
