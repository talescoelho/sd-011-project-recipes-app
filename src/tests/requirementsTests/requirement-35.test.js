import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';

describe(`35 - Design the screen so that it contains an image of the recipe, the title, 
the category (or whether or not you are alcoholic), a list of ingredients followed by the
quantities, instructions, a "drunk" youtube video, and recommendations`, () => {
  it('Check if the elements described in the prototype exist in the food details screen',
    () => {
      renderWithRouterAndStore(<FoodDetails />, '/comidas/:id');
    });

  it(`Check if the elements described in the prototype exist in the drink details 
  screen`, () => {
    renderWithRouterAndStore(<DrinkDetails />, '/bebidas/:id');
  });
});
