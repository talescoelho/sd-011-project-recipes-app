import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodRecipeProgress, DrinkRecipeProgress } from '../../pages';

describe(`53 - Redirect the user after clicking the "Finish recipe" button to the 
recipes made page, whose route should be /recipes-made`, () => {
  it('Redirects after completing a food recipe',
    () => {
      renderWithRouterAndStore(<FoodRecipeProgress />, '/comidas/:id/in-progress');
    });

  it('Redirects after completing a drink recipe',
    () => {
      renderWithRouterAndStore(<DrinkRecipeProgress />, '/bebidas/:id/in-progress');
    });
});
