import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';

describe('42 - Implement a share button and a favorite recipe button', () => {
  it('Checks if the buttons are available in the details screen of a food', () => {
    renderWithRouterAndStore(<FoodDetails />, '/comidas/:id');
  });

  it('Checks if buttons are available on a drink\'s details screen', () => {
    renderWithRouterAndStore(<DrinkDetails />, '/bebidas/:id');
  });
});
