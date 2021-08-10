import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodRecipeProgress, DrinkRecipeProgress } from '../../pages';

describe(`49 - Implement a logic that, when clicking on an ingredient's checkbox, its 
name must be "crossed out" from the list`, () => {
  it('Check if it is possible to mark all steps of the food recipe',
    () => {
      renderWithRouterAndStore(<FoodRecipeProgress />, '/comidas/:id/in-progress');
    });

  it('Check if it is possible to mark all steps of the drink recipe',
    () => {
      renderWithRouterAndStore(<DrinkRecipeProgress />, '/bebidas/:id/in-progress');
    });
});
