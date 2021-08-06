import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';

describe(`40 - Implement the solution so that if the recipe has been started but not 
finished, the button text should read "Continuar Receita"`, () => {
  it('Check "Continuar Receita" button on a food details screen', () => {
    const inProgressRecipes = {
      meals: {
        52771: [],
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    const match = { params: { id: '52771' }, url: '/comidas/52771' };

    renderWithRouterAndStore(<FoodDetails match={ match } />, '/comidas/52771');

    const startRecipeBtn = screen.queryByTestId('start-recipe-btn');
    expect(startRecipeBtn).toHaveTextContent('Continuar Receita');
  });

  it('Check "Continuar Receita" button on a drink details screen', () => {
    const inProgressRecipes = {
      cocktails: {
        178319: [],
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    const match = { params: { id: '178319' }, url: '/bebidas/178319' };

    renderWithRouterAndStore(<DrinkDetails match={ match } />, '/bebidas/178319');

    const startRecipeBtn = screen.queryByTestId('start-recipe-btn');
    expect(startRecipeBtn).toHaveTextContent('Continuar Receita');
  });
});
