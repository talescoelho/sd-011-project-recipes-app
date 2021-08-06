import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';

describe(`38 - Develop a button named "Start Recipe" that should stay fixed at the 
bottom of the screen at all times`, () => {
  it('Check button placement on food details screen', () => {
    const match = { params: { id: '52771' }, url: '/bebidas/52771' };
    renderWithRouterAndStore(<FoodDetails match={ match } />, '/comidas/52771');

    const startRecipeBtn = screen.getByTestId('start-recipe-btn');

    expect(startRecipeBtn).toHaveStyle(`
    position: fixed;
    bottom: 0px;
  `);
  });

  it('Check button placement on drink details screen', async () => {
    const match = { params: { id: '178319' }, url: '/bebidas/178319' };
    renderWithRouterAndStore(<DrinkDetails match={ match } />, '/bebidas/178319');

    const startRecipeBtn = await screen.findByTestId('start-recipe-btn');
    expect(startRecipeBtn).toHaveStyle(`
      position: fixed;
      bottom: 0px;
    `);
  });
});
