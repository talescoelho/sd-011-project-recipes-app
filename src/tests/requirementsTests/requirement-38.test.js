import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';

describe(`38 - Develop a button named "Start Recipe" that should stay fixed at the 
bottom of the screen at all times`, () => {
  it('Check button placement on food details screen', () => {
    renderWithRouterAndStore(<FoodDetails />, '/comidas/:id');
  });

  it('Check button placement on drink details screen', () => {
    renderWithRouterAndStore(<DrinkDetails />, '/bebidas/:id');
  });
});
