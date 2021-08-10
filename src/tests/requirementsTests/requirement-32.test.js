import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { Foods, Drinks } from '../../pages';
import mealsFiltersByAll from '../mocks/meals/mockFilterMealsByAll';
import drinksFiltersByAll from '../mocks/drinks/mockFilterDrinksByAll';
import * as requestMenu from '../../services/requestMenu';

jest
  .spyOn(requestMenu, 'searchMealByName')
  .mockImplementation(() => Promise.resolve(mealsFiltersByAll));

jest
  .spyOn(requestMenu, 'searchDrinkByName')
  .mockImplementation(() => Promise.resolve(drinksFiltersByAll));

afterEach(() => jest.clearAllMocks());
beforeEach(() => jest.clearAllMocks());

describe(`32 - Redirect the user, by clicking on the card, to the details screen, which 
should change the route and contain the recipe id in the URL`, () => {
  it('If the recipes are for food, the route should change to the recipe details screen',
    async () => {
      const { history } = renderWithRouterAndStore(<Foods />, '/comidas');

      const firstFoodCard = await screen.findByTestId('0-recipe-card');
      fireEvent.click(firstFoodCard);

      const { location: { pathname } } = history;
      expect(pathname).toBe('/comidas/52977');
    });

  it(`If the recipes are for drinks, the route should change to the recipe details 
  screen`, async () => {
    const { history } = renderWithRouterAndStore(<Drinks />, '/bebidas');

    const firstDrinkCard = await screen.findByTestId('0-recipe-card');
    fireEvent.click(firstDrinkCard);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/bebidas/15997');
  });
});
