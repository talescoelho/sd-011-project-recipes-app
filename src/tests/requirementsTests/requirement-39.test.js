import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';

describe(`39 - Implement the solution so that if the recipe has already been made, the 
"Start Recipe" button should disappear`, () => {
  it('Check if the start recipe button is not visible in the details screen of a food,',
    () => {
      renderWithRouterAndStore(<FoodDetails />, '/comidas/:id');
    });

  it('Check if start recipe button is not visible on a drink\'s details screen', () => {
    renderWithRouterAndStore(<DrinkDetails />, '/bebidas/:id');
  });
});
