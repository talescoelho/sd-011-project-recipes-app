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

describe(`33 - Implement the elements of a recipe details screen respecting the
attributes described in the prototype`, () => {
  it('The food screen has all data-testid attributes.', async () => {
    renderWithRouterAndStore(<FoodDetails match={ mockMealsMatch } />, mockMealPath);

    const instructions = await screen.findByTestId('instructions');
    const recipeVideo = await screen.findByTestId('video');
    const recomendationCard = await screen.findByTestId('0-recomendation-card');
    const startRecipeBtn = await screen.findByTestId('start-recipe-btn');

    expect(instructions).toBeInTheDocument();
    expect(recipeVideo).toBeInTheDocument();
    expect(recomendationCard).toBeInTheDocument();
    expect(startRecipeBtn).toBeInTheDocument();
  });

  it('The drinks screen has all data-tested attributes.', async () => {
    renderWithRouterAndStore(<DrinkDetails match={ mockDrinkMatch } />, mockDrinkPath);

    const instructions = await screen.findByTestId('instructions');
    const recipeVideo = screen.queryByTestId('video');
    const recomendationCard = await screen.findByTestId('0-recomendation-card');
    const startRecipeBtn = await screen.findByTestId('start-recipe-btn');

    expect(instructions).toBeInTheDocument();
    expect(recipeVideo).not.toBeInTheDocument();
    expect(recomendationCard).toBeInTheDocument();
    expect(startRecipeBtn).toBeInTheDocument();
  });
});
