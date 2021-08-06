import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';

afterEach(() => {
  localStorage.removeItem('doneRecipes');
});

describe(`39 - Implement the solution so that if the recipe has already been made, the 
"Start Recipe" button should disappear`, () => {
  it('Check if the start recipe button is not visible in the details screen of a food,',
    () => {
      const doneRecipes = [{
        id: '52771',
        type: 'comida',
        area: 'Italian',
        category: 'Vegetarian',
        alcoholicOrNot: '',
        name: 'Spicy Arrabiata Penne',
        image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
        doneDate: '22/6/2020',
        tags: ['Pasta', 'Curry'],
      }];
      localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
      const match = { params: { id: '52771' }, url: '/bebidas/52771' };

      renderWithRouterAndStore(<FoodDetails match={ match } />, '/comidas/52771');

      const startRecipeBtn = screen.queryByTestId('start-recipe-btn');
      expect(startRecipeBtn).toBeNull();
    });

  it('Check if start recipe button is not visible on a drink\'s details screen', () => {
    const doneRecipes = [{
      id: '178319',
      type: 'bebida',
      area: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: '23/6/2020',
      tags: [],
    }];
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    const match = { params: { id: '178319' }, url: '/bebidas/178319' };

    renderWithRouterAndStore(<DrinkDetails match={ match } />, '/bebidas/178319');

    const startRecipeBtn = screen.queryByTestId('start-recipe-btn');
    expect(startRecipeBtn).toBeNull();
  });
});
