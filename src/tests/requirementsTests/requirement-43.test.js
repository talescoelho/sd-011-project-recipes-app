import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';

describe(`43 - Implement the solution so that when you click the share button, the 
recipe link within the app should be copied to the clipboard and a message notifying 
you that the link was copied should appear`, () => {
  it(`Checks the message "Link copiado!" and if the food recipe link was copied to the 
  clipboard`, () => {
    renderWithRouterAndStore(<FoodDetails />, '/comidas/:id');
  });

  it(`Checks the message "Link copiado!" and if the drink recipe link was copied to 
  the clipboard`, () => {
    renderWithRouterAndStore(<DrinkDetails />, '/bebidas/:id');
  });
});
