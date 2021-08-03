import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { Foods, Drinks } from '../../pages';
import mealsFiltersByAll from '../mocks/meals/mockFilterMealsByAll';
import drinksFiltersByAll from '../mocks/drinks/mockFilterDrinksByAll';
import * as requestMenu from '../../services/requestMenu';

jest
  .spyOn(requestMenu, 'searchMealByName')
  .mockImplementation(() => Promise.resolve(mealsFiltersByAll));

jest
  .spyOn(requestMenu, 'searchDrinkByName')
  .mockImplementation(() => Promise.resolve(drinksFiltersByAll));

afterEach(() => jest.clearAllMocks());
beforeEach(() => jest.clearAllMocks());

describe(`32 - Redirecione a pessoa usuária, ao clicar no card, para a tela de detalhes, 
que deve mudar a rota e conter o id da receita na URL`, () => {
  it(`Caso as receitas sejam de comida a rota deve mudar para a tela de detalhes da 
  receita`, async () => {
    const { history } = renderWithRouterAndStore(<Foods />, '/comidas');

    const firstFoodCard = await screen.findByTestId('0-recipe-card');
    fireEvent.click(firstFoodCard);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/comidas/52977');
  });

  it(`Caso as receitas sejam de bebida a rota deve mudar para a tela de detalhes da 
  receita`, async () => {
    const { history } = renderWithRouterAndStore(<Drinks />, '/bebidas');

    const firstDrinkCard = await screen.findByTestId('0-recipe-card');
    fireEvent.click(firstDrinkCard);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/bebidas/15997');
  });
});
