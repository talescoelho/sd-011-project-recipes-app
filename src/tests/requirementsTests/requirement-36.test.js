import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';
import { testMealsRecipeCard, testDrinksRecipeCard } from '../helper/testRecipeCard';
import * as requestMenu from '../../services/requestMenu';
import mealsFiltersByAll from '../mocks/meals/mockFilterMealsByAll';
import mealRecipeDetails from '../mocks/meals/mockMealRecipeDetails';
import drinksFiltersByAll from '../mocks/drinks/mockFilterDrinksByAll';
import drinkRecipeDetails from '../mocks/drinks/mockDrinkRecipeDetails';

const maxDefaultCards = 6;
const cardTestId = '-recomendation-card';
const titleTestId = '-recomendation-title';

const mockMealPath = '/comidas/52977';
const mockMealsMatch = { params: { id: '52977' }, url: '/comidas/52977' };

const mockDrinkPath = '/bebidas/15997';
const mockDrinkMatch = { params: { id: '15997' }, url: '/bebidas/15997' };

const mockedSearchMealByName = jest
  .spyOn(requestMenu, 'searchMealByName')
  .mockImplementation(() => Promise.resolve(mealsFiltersByAll));

const mockedSearchDrinkByName = jest
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

describe(`36 - Implement the recommendations, for food recipes the recommendation should 
be drink and vice versa`, () => {
  it('Check if the request for the food API has been made', async () => {
    renderWithRouterAndStore(<FoodDetails match={ mockMealsMatch } />, mockMealPath);

    expect(mockedSearchDrinkByName).toBeCalled();
    expect(mockedSearchDrinkByName).toBeCalledTimes(1);

    const { drinks } = drinksFiltersByAll;
    await testDrinksRecipeCard(drinks, maxDefaultCards, cardTestId, titleTestId);
  });

  it('Checks whether the request for the beverage API has been made', async () => {
    renderWithRouterAndStore(<DrinkDetails match={ mockDrinkMatch } />, mockDrinkPath);

    expect(mockedSearchMealByName).toBeCalled();
    expect(mockedSearchMealByName).toBeCalledTimes(1);

    const { meals } = mealsFiltersByAll;
    await testMealsRecipeCard(meals, maxDefaultCards, cardTestId, titleTestId);
  });
});
