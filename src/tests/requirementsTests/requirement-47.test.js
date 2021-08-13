import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import App from '../../App';

describe(`47 - Design the screen so that it contains an image of the recipe, its title, 
its category (or whether the drink is alcoholic or not), a list of ingredients with 
their respective quantities and instructions`, () => {
  it('Check elements of a food recipe',
    () => {
      renderWithRouterAndStore(<App />, { route: '/comidas/52977/in-progress' });
    });

  it('Check elements of a drink recipe',
    () => {
      renderWithRouterAndStore(<App />, { route: '/bebidas/15997/in-progress' });
    });
});
