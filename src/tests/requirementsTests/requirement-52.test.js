import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodRecipeProgress, DrinkRecipeProgress } from '../../pages';

describe(`52 - Implement the solution so that the finish recipe button can only be 
enabled when all ingredients are "checked"`, () => {
  it('Check if the end button is disabled in food recipes',
    () => {
      renderWithRouterAndStore(<FoodRecipeProgress />, '/comidas/:id/in-progress');
    });

  it('check if the end button is enabled in food recipes',
    () => {
      renderWithRouterAndStore(<FoodRecipeProgress />, '/comidas/:id/in-progress');
    });

  it('Check if the end button is disabled in drink recipes',
    () => {
      renderWithRouterAndStore(<DrinkRecipeProgress />, '/bebidas/:id/in-progress');
    });

  it('Check if the end button is enabled in drink recipes',
    () => {
      renderWithRouterAndStore(<DrinkRecipeProgress />, '/bebidas/:id/in-progress');
    });
});
