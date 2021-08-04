import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';

describe(`44 - Implement the heart icon (favorite) so that it must be filled in if the 
recipe is favorited and "unfilled" otherwise`, () => {
  it('Check if the favorite food comes with the heart filled', () => {
    renderWithRouterAndStore(<FoodDetails />, '/comidas/:id');
  });

  it('Checks if the non-favorite food comes with the heart "unfilled"', () => {
    renderWithRouterAndStore(<FoodDetails />, '/comidas/:id');
  });

  it('Check if the favorite drink comes with the heart filled', () => {
    renderWithRouterAndStore(<DrinkDetails />, '/bebidas/:id');
  });

  it('Checks if the non-favorite drink comes with the heart "unfilled"', () => {
    renderWithRouterAndStore(<DrinkDetails />, '/bebidas/:id');
  });
});
