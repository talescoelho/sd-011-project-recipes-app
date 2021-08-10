import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodRecipeProgress, DrinkRecipeProgress } from '../../pages';

describe(`50 - Save the progress status, which should be kept if the person refreshes 
the page or goes back to the same recipe`, () => {
  it('Saves the progress of a food recipe in progress',
    () => {
      renderWithRouterAndStore(<FoodRecipeProgress />, '/comidas/:id/in-progress');
    });

  it('Saves the progress of a drink recipe in progress',
    () => {
      renderWithRouterAndStore(<DrinkRecipeProgress />, '/bebidas/:id/in-progress');
    });
});
