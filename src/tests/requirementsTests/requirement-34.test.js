import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import * as requestMenu from '../../services/requestMenu';
import mealsFiltersByAll from '../mocks/meals/mockFilterMealsByAll';
import mealRecipeDetails from '../mocks/meals/mockMealRecipeDetails';
import drinksFiltersByAll from '../mocks/drinks/mockFilterDrinksByAll';
import drinkRecipeDetails from '../mocks/drinks/mockDrinkRecipeDetails';
import App from '../../App';

const mockMealPath = '/comidas/52977';
const mockDrinkPath = '/bebidas/15997';

const mockedSearchMealByName = jest
  .spyOn(requestMenu, 'searchMealByName')
  .mockImplementation(() => Promise.resolve(mealsFiltersByAll));

const mockedSearchDrinkByName = jest
  .spyOn(requestMenu, 'searchDrinkByName')
  .mockImplementation(() => Promise.resolve(drinksFiltersByAll));

const mockMealsRecipeDetails = jest
  .spyOn(requestMenu, 'mealsRecipeDetails')
  .mockImplementation(() => Promise.resolve(mealRecipeDetails));

const mockDrinksRecipeDetails = jest
  .spyOn(requestMenu, 'drinksRecipeDetails')
  .mockImplementation(() => Promise.resolve(drinkRecipeDetails));

afterEach(() => jest.clearAllMocks());
beforeEach(() => jest.clearAllMocks());

describe(`34 - Make a request to the API passing the id of the recipe that must be 
available in the URL parameters`, () => {
  it('Check if the request for the food API has been made', () => {
    renderWithRouterAndStore(<App />, { route: mockMealPath });

    expect(mockedSearchDrinkByName).toHaveBeenCalled();
    expect(mockedSearchDrinkByName).toHaveBeenCalledTimes(1);
    expect(mockMealsRecipeDetails).toHaveBeenCalled();
    expect(mockMealsRecipeDetails).toHaveBeenCalledWith('52977');
    expect(mockMealsRecipeDetails).toHaveBeenCalledTimes(1);
  });

  it('Checks whether the request for the drink\'s API has been made', () => {
    renderWithRouterAndStore(<App />, { route: mockDrinkPath });

    expect(mockedSearchMealByName).toHaveBeenCalled();
    expect(mockedSearchMealByName).toHaveBeenCalledTimes(1);
    expect(mockDrinksRecipeDetails).toHaveBeenCalled();
    expect(mockDrinksRecipeDetails).toHaveBeenCalledWith('15997');
    expect(mockDrinksRecipeDetails).toHaveBeenCalledTimes(1);
  });
});
