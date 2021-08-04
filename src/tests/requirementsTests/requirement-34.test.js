import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';

describe(`34 - Make a request to the API passing the id of the recipe that must be 
available in the URL parameters`, () => {
  it('Check if the request for the food API has been made', () => {
    renderWithRouterAndStore(<FoodDetails />, '/comidas/:id');
  });

  it('Checks whether the request for the beverage API has been made', () => {
    renderWithRouterAndStore(<DrinkDetails />, '/bebidas/:id');
  });
});
