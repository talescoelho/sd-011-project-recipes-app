import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';

describe(`45 - Implement the logic on the bookmark button, if clicked, the heart 
icon should change its current state, if filled it should change to "unfilled" 
and vice versa`, () => {
  it('Favorite food', () => {
    renderWithRouterAndStore(<FoodDetails />, '/comidas/:id');
  });

  it('Disfavors the food', () => {
    renderWithRouterAndStore(<FoodDetails />, '/comidas/:id');
  });

  it('Favorite drink', () => {
    renderWithRouterAndStore(<DrinkDetails />, '/bebidas/:id');
  });

  it('Disfavors drinking', () => {
    renderWithRouterAndStore(<DrinkDetails />, '/bebidas/:id');
  });
});
