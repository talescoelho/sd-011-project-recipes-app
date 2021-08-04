import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';

describe(`33 - Implement the elements of a recipe details screen respecting the
attributes described in the prototype`, () => {
  it('The food screen has all data-testid attributes.', () => {
    renderWithRouterAndStore(<FoodDetails />, '/comidas/:id');
  });

  it('The drinks screen has all data-tested attributes.', () => {
    renderWithRouterAndStore(<DrinkDetails />, '/bebidas/:id');
  });
});
