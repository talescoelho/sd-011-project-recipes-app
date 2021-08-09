import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodDetails, DrinkDetails } from '../../pages';

describe(`41 - Redirect the user person if the "Iniciar Receita" button is clicked, the 
route should change to the recipe in process screen`, () => {
  it('Redirects to food recipe screen in process', () => {
    const match = { params: { id: '52771' }, url: '/comidas/52771' };
    const { history } = renderWithRouterAndStore(
      <FoodDetails match={ match } />, '/comidas/52771',
    );

    const startRecipeBtn = screen.getByTestId('start-recipe-btn');
    fireEvent.click(startRecipeBtn);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/comidas/52771/in-progress');
  });

  it('Redirects to drink recipe screen in process', () => {
    const match = { params: { id: '178319' }, url: '/bebidas/178319' };
    const { history } = renderWithRouterAndStore(
      <DrinkDetails match={ match } />, '/bebidas/178319',
    );

    const startRecipeBtn = screen.getByTestId('start-recipe-btn');
    fireEvent.click(startRecipeBtn);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/bebidas/178319/in-progress');
  });
});
