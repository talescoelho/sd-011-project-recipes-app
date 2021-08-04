import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';

describe('46 - Save favorite recipes in localStorage under favoriteRecipes key', () => {
  it('Checks if after favorite food recipe, it is correctly saved in localStorage',
    () => {
      renderWithRouterAndStore(<FoodDetails />, '/comidas/:id');
    });

  it('Checks if after favorite drink recipe, it is correctly saved in localStorage',
    () => {
      renderWithRouterAndStore(<DrinkDetails />, '/bebidas/:id');
    });
});
