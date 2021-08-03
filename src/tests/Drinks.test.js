import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouterAndStore } from './helper/testConfig';
import { drinksFiltersOptions } from './mocks/mockFilterOptions';
import drinksFiltersByAll from './mocks/drinks/mockFilterDrinksByAll';
import drinksFilterByOrdinaryDrink from './mocks/drinks/mockFilterByOrdinaryDrink';
import drinksFilterByCocktail from './mocks/drinks/mockFilterByCocktail';
import drinksFilterByMilkFloatShake from './mocks/drinks/mockFilterByMilkFloatShake';
import drinksFilterByOtherUnknown from './mocks/drinks/mockFilterByOtherUnknown';
import drinksFilterByCocoa from './mocks/drinks/mockFilterByCocoa';
import Drinks from '../pages/Drinks';
import * as requestMenu from '../services/requestMenu';

const testRecipeCard = async (menu, maxCards) => {
  const reduceToMaxCards = menu.slice(0, maxCards);
  await Promise.all(
    reduceToMaxCards.map(async ({ idDrink, strDrink, strDrinkThumb }, index) => {
      const foodCard = await screen.findByTestId(`${index}-recipe-card`);
      const foodCardImg = await screen.findByTestId(`${index}-card-img`);
      const foodCardName = await screen.findByTestId(`${index}-card-name`);

      expect(foodCard).toBeInTheDocument();
      expect(foodCard).toHaveAttribute('href', `/bebidas/${idDrink}`);
      expect(foodCardImg).toHaveAttribute('src', strDrinkThumb);
      expect(foodCardName).toHaveTextContent(strDrink);
    }),
  );
};

const maxDefaultCards = 12;

const mockedSearchDrinkByName = jest
  .spyOn(requestMenu, 'searchDrinkByName')
  .mockImplementation(() => Promise.resolve(drinksFiltersByAll));

const mockedRequestAllDrinksCategories = jest
  .spyOn(requestMenu, 'requestAllDrinkCategories')
  .mockImplementation(() => Promise.resolve(drinksFiltersOptions));

const mockFilterDrinkByCategory = (category) => (
  jest
    .spyOn(requestMenu, 'filterDrinkByCategory')
    .mockImplementation(() => Promise.resolve(category))
);

afterEach(() => jest.clearAllMocks());
beforeEach(() => jest.clearAllMocks());

describe(`25 - Implemente os elementos da tela principal de receitas respeitando os 
atributos descritos no protótipo`, () => {
  it('A tela tem os data-testids de todos os 12 cards da tela de bebida', async () => {
    renderWithRouterAndStore(<Drinks />, '/bebidas');
    expect(mockedSearchDrinkByName).toBeCalled();
    expect(mockedSearchDrinkByName).toBeCalledTimes(1);
    expect(mockedRequestAllDrinksCategories).toBeCalled();
    expect(mockedRequestAllDrinksCategories).toBeCalledTimes(1);

    const { drinks } = drinksFiltersByAll;
    await testRecipeCard(drinks, maxDefaultCards);

    expect(screen.queryByTestId('12-recipe-card')).toBeNull();
    expect(screen.queryByTestId('12-recipe-img')).toBeNull();
    expect(screen.queryByTestId('12-recipe-name')).toBeNull();
  });
});

describe('26 - Carregue as 12 primeiras receitas de bebidas, uma em cada card',
  () => {
    it('Deve carregar as 12 primeiras receitas de bebida', async () => {
      renderWithRouterAndStore(<Drinks />, '/bebidas');
      const { drinks } = drinksFiltersByAll;
      await testRecipeCard(drinks, maxDefaultCards);

      expect(screen.queryByTestId('12-recipe-card')).toBeNull();
      expect(screen.queryByTestId('12-recipe-img')).toBeNull();
      expect(screen.queryByTestId('12-recipe-name')).toBeNull();
    });
  });

describe('27 - Implemente os botões de categoria para serem utilizados como filtro',
  () => {
    it(`Caso as receitas sejam de comida, deve-se exibir as 5 primeiras categorias de 
    comida`, async () => {
      renderWithRouterAndStore(<Drinks />, '/bebidas');

      const ordinaryDrinkFilterOption = await screen
        .findByTestId('Ordinary Drink-category-filter');
      const cocktailFilterOption = await screen
        .findByTestId('Cocktail-category-filter');
      const milkFloatShakeFilterOption = await screen
        .findByTestId('Milk / Float / Shake-category-filter');
      const otherUnknownFilterOption = await screen
        .findByTestId('Other/Unknown-category-filter');
      const cocoaFilterOption = await screen.findByTestId('Cocoa-category-filter');

      expect(ordinaryDrinkFilterOption).toBeInTheDocument();
      expect(ordinaryDrinkFilterOption).toHaveTextContent('Ordinary Drink');
      expect(cocktailFilterOption).toBeInTheDocument();
      expect(cocktailFilterOption).toHaveTextContent('Cocktail');
      expect(milkFloatShakeFilterOption).toBeInTheDocument();
      expect(milkFloatShakeFilterOption).toHaveTextContent('Milk / Float / Shake');
      expect(otherUnknownFilterOption).toBeInTheDocument();
      expect(otherUnknownFilterOption).toHaveTextContent('Other/Unknown');
      expect(cocoaFilterOption).toBeInTheDocument();
      expect(cocoaFilterOption).toHaveTextContent('Cocoa');

      const filterButtons = await screen.findAllByRole('button', { name: 'filter-btn' });

      const maxFilterButtons = 6;

      expect(filterButtons.length).toBe(maxFilterButtons);
      expect(filterButtons.length).not.toBe(maxFilterButtons + 1);
    });
  });

describe(`28 - Implemente o filtro das receitas através da API ao clicar no filtro de 
  categoria`, () => {
  it(`Caso as receitas sejam de bebidas e a categoria seja "Ordinary Drink", deve-se 
  carregar as  12 primeiras receitas de "Ordinary Drink"`, async () => {
    const mockFilterDrinkByOrdinaryDrink = mockFilterDrinkByCategory(
      drinksFilterByOrdinaryDrink,
    );

    renderWithRouterAndStore(<Drinks />, '/bebidas');

    const ordinaryDrinkFilterOption = await screen
      .findByTestId('Ordinary Drink-category-filter');
    fireEvent.click(ordinaryDrinkFilterOption);

    expect(mockFilterDrinkByOrdinaryDrink).toBeCalled();
    expect(mockFilterDrinkByOrdinaryDrink).toBeCalledTimes(1);

    const cards = await screen.findAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(maxDefaultCards);
    expect(cards.length).not.toBe(maxDefaultCards + 1);

    const { drinks } = drinksFilterByOrdinaryDrink;
    await testRecipeCard(drinks, maxDefaultCards);
  });

  it(`Caso as receitas sejam de bebidas e a categoria seja "Cocktail", deve-se 
  carregar as  12 primeiras receitas de "Cocktail"`, async () => {
    const mockFilterDrinkByCocktail = mockFilterDrinkByCategory(
      drinksFilterByCocktail,
    );

    renderWithRouterAndStore(<Drinks />, '/bebidas');

    const cocktailFilterOption = await screen
      .findByTestId('Cocktail-category-filter');
    fireEvent.click(cocktailFilterOption);

    expect(mockFilterDrinkByCocktail).toBeCalled();
    expect(mockFilterDrinkByCocktail).toBeCalledTimes(1);

    const cards = await screen.findAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(maxDefaultCards);
    expect(cards.length).not.toBe(maxDefaultCards + 1);

    const { drinks } = drinksFilterByCocktail;
    await testRecipeCard(drinks, maxDefaultCards);
  });

  it(`Caso as receitas sejam de bebidas e a categoria seja "Milk/Float/Shake", deve-se 
  carregar as  12 primeiras receitas de "Milk/Float/Shake"`, async () => {
    const mockFilterDrinkByMilkFloatShake = mockFilterDrinkByCategory(
      drinksFilterByMilkFloatShake,
    );

    renderWithRouterAndStore(<Drinks />, '/bebidas');

    const milkFloatShakeFilterOption = await screen
      .findByTestId('Milk / Float / Shake-category-filter');
    fireEvent.click(milkFloatShakeFilterOption);

    expect(mockFilterDrinkByMilkFloatShake).toBeCalled();
    expect(mockFilterDrinkByMilkFloatShake).toBeCalledTimes(1);

    const cards = await screen.findAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(maxDefaultCards);
    expect(cards.length).not.toBe(maxDefaultCards + 1);

    const { drinks } = drinksFilterByMilkFloatShake;
    await testRecipeCard(drinks, maxDefaultCards);
  });

  it(`Caso as receitas sejam de bebidas e a categoria seja "Other/Unknown", deve-se 
  carregar as  12 primeiras receitas de "Other/Unknown"`, async () => {
    const mockFilterDrinkByOtherUnknown = mockFilterDrinkByCategory(
      drinksFilterByOtherUnknown,
    );

    renderWithRouterAndStore(<Drinks />, '/bebidas');

    const otherUnknownFilterOption = await screen
      .findByTestId('Other/Unknown-category-filter');
    fireEvent.click(otherUnknownFilterOption);

    expect(mockFilterDrinkByOtherUnknown).toBeCalled();
    expect(mockFilterDrinkByOtherUnknown).toBeCalledTimes(1);

    const cards = await screen.findAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(maxDefaultCards);
    expect(cards.length).not.toBe(maxDefaultCards + 1);

    const { drinks } = drinksFilterByOtherUnknown;
    await testRecipeCard(drinks, maxDefaultCards);
  });

  it(`Caso as receitas sejam de bebidas e a categoria seja "Cocoa", deve-se 
  carregar as  12 primeiras receitas de "Cocoa"`, async () => {
    const mockFilterDrinkByCocoa = mockFilterDrinkByCategory(
      drinksFilterByCocoa,
    );

    const maxCocoaCards = 9;

    renderWithRouterAndStore(<Drinks />, '/bebidas');

    const cocoaFilterOption = await screen
      .findByTestId('Cocoa-category-filter');
    fireEvent.click(cocoaFilterOption);

    expect(mockFilterDrinkByCocoa).toBeCalled();
    expect(mockFilterDrinkByCocoa).toBeCalledTimes(1);

    const cards = await screen.findAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(maxCocoaCards);
    expect(cards.length).not.toBe(maxCocoaCards + 1);

    const { drinks } = drinksFilterByCocoa;
    await testRecipeCard(drinks, maxCocoaCards);
  });
});
