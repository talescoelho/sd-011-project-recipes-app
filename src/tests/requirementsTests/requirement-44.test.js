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

describe(`44 - Implement the heart icon (favorite) so that it must be filled in if the 
recipe is favorited and "unfilled" otherwise`, () => {
  it('Check if the favorite food comes with the heart filled', () => {
    renderWithRouterAndStore(<FoodDetails match={ mockMealsMatch } />, mockMealPath);
  });

  it('Checks if the non-favorite food comes with the heart "unfilled"', () => {
    renderWithRouterAndStore(<FoodDetails match={ mockMealsMatch } />, mockMealPath);
  });

  it('Check if the favorite drink comes with the heart filled', () => {
    renderWithRouterAndStore(<DrinkDetails match={ mockDrinkMatch } />, mockDrinkPath);
  });

  it('Checks if the non-favorite drink comes with the heart "unfilled"', () => {
    renderWithRouterAndStore(<DrinkDetails match={ mockDrinkMatch } />, mockDrinkPath);
  });
});
