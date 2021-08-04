import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodRecipeProgress, DrinkRecipeProgress } from '../../pages';

describe('48 - Develop a checkbox for each item on the ingredient list', () => {
  it('All ingredients of a food recipe have a checkbox',
    () => {
      renderWithRouterAndStore(<FoodRecipeProgress />, '/comidas/:id/in-progress');
    });

  it('All ingredients of a drink recipe have a checkbox',
    () => {
      renderWithRouterAndStore(<DrinkRecipeProgress />, '/bebidas/:id/in-progress');
    });
});
