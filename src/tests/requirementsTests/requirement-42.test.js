import React from 'react';
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

describe('42 - Implement a share button and a favorite recipe button', () => {
  it('Checks if the buttons are available in the details screen of a food', () => {
    renderWithRouterAndStore(<FoodDetails match={ mockMealsMatch } />, mockMealPath);
  });

  it('Checks if buttons are available on a drink\'s details screen', () => {
    renderWithRouterAndStore(<DrinkDetails match={ mockDrinkMatch } />, mockDrinkPath);
  });
});
