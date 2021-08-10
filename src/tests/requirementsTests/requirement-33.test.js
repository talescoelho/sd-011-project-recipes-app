import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';
import * as requestMenu from '../../services/requestMenu';
import mealsFiltersByAll from '../mocks/meals/mockFilterMealsByAll';
import drinksFiltersByAll from '../mocks/drinks/mockFilterDrinksByAll';

jest
  .spyOn(requestMenu, 'searchMealByName')
  .mockImplementation(() => Promise.resolve(mealsFiltersByAll));

jest
  .spyOn(requestMenu, 'searchDrinkByName')
  .mockImplementation(() => Promise.resolve(drinksFiltersByAll));

afterEach(() => jest.clearAllMocks());
beforeEach(() => jest.clearAllMocks());

describe(`33 - Implement the elements of a recipe details screen respecting the
attributes described in the prototype`, () => {
  it('The food screen has all data-testid attributes.', async () => {
    const match = { params: { id: '52771' }, url: '/comidas/52771' };
    renderWithRouterAndStore(<FoodDetails match={ match } />, '/comidas/52771');

    const instructions = await screen.findByTestId('instructions');
    const recomendationCard = await screen.findByTestId('0-recomendation-card');
    const startRecipeBtn = await screen.findByTestId('start-recipe-btn');

    expect(instructions).toBeInTheDocument();
    expect(recomendationCard).toBeInTheDocument();
    expect(startRecipeBtn).toBeInTheDocument();
  });

  it('The drinks screen has all data-tested attributes.', async () => {
    const match = { params: { id: '178319' }, url: '/bebidas/178319' };
    renderWithRouterAndStore(<DrinkDetails match={ match } />, '/bebidas/178319');

    const instructions = await screen.findByTestId('instructions');
    const recomendationCard = await screen.findByTestId('0-recomendation-card');
    const startRecipeBtn = await screen.findByTestId('start-recipe-btn');

    expect(instructions).toBeInTheDocument();
    expect(recomendationCard).toBeInTheDocument();
    expect(startRecipeBtn).toBeInTheDocument();
  });
});
