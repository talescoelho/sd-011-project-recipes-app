import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { testMealsRecipeCard, testDrinksRecipeCard } from '../helper/testRecipeCard';
import { mockFilterDrinkByCategory, mockFilterMealByCategory } from '../helper/mockAPI';
import { Foods, Drinks } from '../../pages';
import drinksFiltersByAll from '../mocks/drinks/mockFilterDrinksByAll';
import mealsFiltersByAll from '../mocks/meals/mockFilterMealsByAll';
import mealsFilterByBeef from '../mocks/meals/mockFilterByBeef';
import drinksFilterByOrdinaryDrink from '../mocks/drinks/mockFilterByOrdinaryDrink';
import * as requestMenu from '../../services/requestMenu';

const maxDefaultCards = 12;

jest
  .spyOn(requestMenu, 'searchMealByName')
  .mockImplementation(() => Promise.resolve(mealsFiltersByAll));

jest
  .spyOn(requestMenu, 'searchDrinkByName')
  .mockImplementation(() => Promise.resolve(drinksFiltersByAll));

afterEach(() => jest.clearAllMocks());
beforeEach(() => jest.clearAllMocks());

describe(`29 - Implemente o filtro como um toggle, que se for selecionado de novo, o app 
deve retornar as receitas sem nenhum filtro`, () => {
  it(`Caso as receitas sejam de comida e o filtro tenha sido selecionado novamente, 
  deve-se retornar as 12 primeiras receitas sem filtro`, async () => {
    renderWithRouterAndStore(<Foods />, '/comidas');
    mockFilterMealByCategory(mealsFilterByBeef);

    const beefFilterOption = await screen.findByTestId('Beef-category-filter');
    fireEvent.click(beefFilterOption);
    fireEvent.click(beefFilterOption);

    const { meals } = mealsFiltersByAll;
    await testMealsRecipeCard(meals, maxDefaultCards);
  });

  it(`Caso as receitas sejam de bebidas e o filtro tenha sido selecionado novamente, 
  deve-se retornar as 12 primeiras receitas sem filtro`, async () => {
    renderWithRouterAndStore(<Drinks />, '/bebidas');
    mockFilterDrinkByCategory(drinksFilterByOrdinaryDrink);

    const ordinaryDrinkFilterOption = await screen.findByTestId(
      'Ordinary Drink-category-filter',
    );
    fireEvent.click(ordinaryDrinkFilterOption);
    fireEvent.click(ordinaryDrinkFilterOption);

    const { drinks } = drinksFiltersByAll;
    await testDrinksRecipeCard(drinks, maxDefaultCards);
  });
});
