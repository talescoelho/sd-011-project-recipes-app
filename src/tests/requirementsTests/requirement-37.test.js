import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';

describe(`37 - Implement the recommendation cards, which will be 6 cards, but showing 
only 2 and the scroll is horizontal, similar to a carousel`, () => {
  it('Checks if there are any recommendations in the details screen of a food', () => {
    renderWithRouterAndStore(<FoodDetails />, '/comidas/:id');
  });

  it('Check if there are any recommendations in the details screen of a drink', () => {
    renderWithRouterAndStore(<DrinkDetails />, '/bebidas/:id');
  });
});
