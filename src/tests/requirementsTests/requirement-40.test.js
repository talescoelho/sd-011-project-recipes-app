import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';

describe(`40 - Implement the solution so that if the recipe has been started but not 
finished, the button text should read "Continuar Receita"`, () => {
  it('Check "Continuar Receita" button on a food details screen', () => {
    renderWithRouterAndStore(<FoodDetails />, '/comidas/:id');
  });

  it('Check "Continuar Receita" button on a drink details screen', () => {
    renderWithRouterAndStore(<DrinkDetails />, '/bebidas/:id');
  });
});
