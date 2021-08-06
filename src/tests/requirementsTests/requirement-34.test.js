import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';
import * as requestMenu from '../../services/requestMenu';

const fetch = jest.spyOn(global, 'fetch');
const mockMealsRecipeDetails = jest.spyOn(requestMenu, 'mealsRecipeDetails');
const mockDrinksRecipeDetails = jest.spyOn(requestMenu, 'drinksRecipeDetails');

afterEach(() => jest.clearAllMocks());
beforeEach(() => jest.clearAllMocks());

describe(`34 - Make a request to the API passing the id of the recipe that must be 
available in the URL parameters`, () => {
  it('Check if the request for the food API has been made', () => {
    const match = { params: { id: '52771' }, url: '/comidas/52771' };
    renderWithRouterAndStore(<FoodDetails match={ match } />, '/comidas/52771');

    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(mockMealsRecipeDetails).toHaveBeenCalled();
    expect(mockMealsRecipeDetails).toHaveBeenCalledWith('52771');
    expect(mockMealsRecipeDetails).toHaveBeenCalledTimes(1);
  });

  it('Checks whether the request for the drink\'s API has been made', () => {
    const match = { params: { id: '178319' }, url: '/bebidas/178319' };
    renderWithRouterAndStore(<DrinkDetails match={ match } />, '/bebidas/178319');

    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178319');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(mockDrinksRecipeDetails).toHaveBeenCalled();
    expect(mockDrinksRecipeDetails).toHaveBeenCalledWith('178319');
    expect(mockDrinksRecipeDetails).toHaveBeenCalledTimes(1);
  });
});
