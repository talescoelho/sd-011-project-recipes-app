import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';

describe(`36 - Implement the recommendations, for food recipes the recommendation should 
be drink and vice versa`, () => {
  it('Checks whether the request for the beverage API has been made', () => {
    renderWithRouterAndStore(<FoodDetails />, '/comidas/:id');
  });

  it('Check if the request for the food API has been made', () => {
    renderWithRouterAndStore(<DrinkDetails />, '/bebidas/:id');
  });
});
