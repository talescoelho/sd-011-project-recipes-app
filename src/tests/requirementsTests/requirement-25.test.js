import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { mealsFiltersOptions, drinksFiltersOptions } from '../mocks/mockFilterOptions';
import { testMealsRecipeCard, testDrinksRecipeCard } from '../helper/testRecipeCard';
import * as requestMenu from '../../services/requestMenu';
import Foods from '../../pages/Foods';
import Drinks from '../../pages/Drinks';
import mealsFiltersByAll from '../mocks/meals/mockFilterMealsByAll';
import drinksFiltersByAll from '../mocks/drinks/mockFilterDrinksByAll';

const maxDefaultCards = 12;

const mockedSearchMealByName = jest
  .spyOn(requestMenu, 'searchMealByName')
  .mockImplementation(() => Promise.resolve(mealsFiltersByAll));

const mockedRequestAllMealCategories = jest
  .spyOn(requestMenu, 'requestAllMealCategories')
  .mockImplementation(() => Promise.resolve(mealsFiltersOptions));

const mockedSearchDrinkByName = jest
  .spyOn(requestMenu, 'searchDrinkByName')
  .mockImplementation(() => Promise.resolve(drinksFiltersByAll));

const mockedRequestAllDrinksCategories = jest
  .spyOn(requestMenu, 'requestAllDrinkCategories')
  .mockImplementation(() => Promise.resolve(drinksFiltersOptions));

afterEach(() => jest.clearAllMocks());
beforeEach(() => jest.clearAllMocks());

describe(`25 - Implemente os elementos da tela principal de receitas respeitando os 
atributos descritos no protótipo`, () => {
  it('A tela tem os data-testids de todos os 12 cards da tela de comidas', async () => {
    renderWithRouterAndStore(<Foods />, '/comidas');

    expect(mockedSearchMealByName).toBeCalled();
    expect(mockedSearchMealByName).toBeCalledTimes(1);
    expect(mockedRequestAllMealCategories).toBeCalled();
    expect(mockedRequestAllMealCategories).toBeCalledTimes(1);

    const { meals } = mealsFiltersByAll;
    await testMealsRecipeCard(meals, maxDefaultCards);

    expect(screen.queryByTestId('12-recipe-card')).toBeNull();
    expect(screen.queryByTestId('12-recipe-img')).toBeNull();
    expect(screen.queryByTestId('12-recipe-name')).toBeNull();
  });

  it('A tela tem os data-testids de todos os 12 cards da tela de bebida', async () => {
    renderWithRouterAndStore(<Drinks />, '/bebidas');
    expect(mockedSearchDrinkByName).toBeCalled();
    expect(mockedSearchDrinkByName).toBeCalledTimes(1);
    expect(mockedRequestAllDrinksCategories).toBeCalled();
    expect(mockedRequestAllDrinksCategories).toBeCalledTimes(1);

    const { drinks } = drinksFiltersByAll;
    await testDrinksRecipeCard(drinks, maxDefaultCards);

    expect(screen.queryByTestId('12-recipe-card')).toBeNull();
    expect(screen.queryByTestId('12-recipe-img')).toBeNull();
    expect(screen.queryByTestId('12-recipe-name')).toBeNull();
  });
});
