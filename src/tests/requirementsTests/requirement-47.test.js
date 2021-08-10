import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodRecipeProgress, DrinkRecipeProgress } from '../../pages';

describe(`47 - Design the screen so that it contains an image of the recipe, its title, 
its category (or whether the drink is alcoholic or not), a list of ingredients with 
their respective quantities and instructions`, () => {
  it('Check elements of a food recipe',
    () => {
      renderWithRouterAndStore(<FoodRecipeProgress />, '/comidas/:id/in-progress');
    });

  it('Check elements of a drink recipe',
    () => {
      renderWithRouterAndStore(<DrinkRecipeProgress />, '/bebidas/:id/in-progress');
    });
});
