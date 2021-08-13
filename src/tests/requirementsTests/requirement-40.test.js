import React from 'react';
import { screen } from '@testing-library/react';
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

describe(`40 - Implement the solution so that if the recipe has been started but not 
finished, the button text should read "Continuar Receita"`, () => {
  it('Check "Continuar Receita" button on a food details screen', () => {
    const inProgressRecipes = {
      meals: {
        52977: [],
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    renderWithRouterAndStore(<FoodDetails match={ mockMealsMatch } />, mockMealPath);

    const startRecipeBtn = screen.queryByTestId('start-recipe-btn');
    expect(startRecipeBtn).toHaveTextContent('Continuar Receita');
  });

  it('Check "Continuar Receita" button on a drink details screen', () => {
    const inProgressRecipes = {
      cocktails: {
        15997: [],
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    renderWithRouterAndStore(<DrinkDetails match={ mockDrinkMatch } />, mockDrinkPath);

    const startRecipeBtn = screen.queryByTestId('start-recipe-btn');
    expect(startRecipeBtn).toHaveTextContent('Continuar Receita');
  });
});
