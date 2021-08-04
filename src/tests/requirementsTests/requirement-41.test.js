import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';

describe(`41 - Redirect the user person if the "Iniciar Receita" button is clicked, the 
route should change to the recipe in process screen`, () => {
  it('Redirects to food recipe screen in process', () => {
    renderWithRouterAndStore(<FoodDetails />, '/comidas/:id');
  });

  it('Redirects to drink recipe screen in process', () => {
    renderWithRouterAndStore(<DrinkDetails />, '/bebidas/:id');
  });
});
