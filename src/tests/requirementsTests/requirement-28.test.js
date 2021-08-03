import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { testMealsRecipeCard, testDrinksRecipeCard } from '../helper/testRecipeCard';
import { mockFilterDrinkByCategory, mockFilterMealByCategory } from '../helper/mockAPI';
import { Foods, Drinks } from '../../pages';
import mealsFilterByBeef from '../mocks/meals/mockFilterByBeef';
import mealsFilterByBreakfast from '../mocks/meals/mockFilterByBreakfast';
import mealsFilterByChicken from '../mocks/meals/mockFilterByChicken';
import mealsFilterByDessert from '../mocks/meals/mockFilterByDessert';
import mealsFilterByGoat from '../mocks/meals/mockFilterByGoat';
import drinksFilterByOrdinaryDrink from '../mocks/drinks/mockFilterByOrdinaryDrink';
import drinksFilterByCocktail from '../mocks/drinks/mockFilterByCocktail';
import drinksFilterByMilkFloatShake from '../mocks/drinks/mockFilterByMilkFloatShake';
import drinksFilterByOtherUnknown from '../mocks/drinks/mockFilterByOtherUnknown';
import drinksFilterByCocoa from '../mocks/drinks/mockFilterByCocoa';

const maxDefaultCards = 12;

afterEach(() => jest.clearAllMocks());
beforeEach(() => jest.clearAllMocks());

describe(`28 - Implemente o filtro das receitas através da API ao clicar no filtro de 
  categoria`, () => {
  it(`Caso as receitas sejam de comida e a categoria seja "Beef", deve-se carregar as 
    12 primeiras receitas de "Beef"`, async () => {
    renderWithRouterAndStore(<Foods />, '/comidas');
    const mockFilterMealByBeef = mockFilterMealByCategory(mealsFilterByBeef);

    const beefFilterOption = await screen.findByTestId('Beef-category-filter');
    fireEvent.click(beefFilterOption);

    expect(mockFilterMealByBeef).toBeCalled();
    expect(mockFilterMealByBeef).toBeCalledTimes(1);

    const cards = await screen.findAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(maxDefaultCards);
    expect(cards.length).not.toBe(maxDefaultCards + 1);

    const { meals } = mealsFilterByBeef;
    await testMealsRecipeCard(meals, maxDefaultCards);
  });

  it(`Caso as receitas sejam de comida e a categoria seja "Breakfast", deve-se 
  carregar as 12 primeiras receitas de "Breakfast"`, async () => {
    renderWithRouterAndStore(<Foods />, '/comidas');
    const mockFilterMealByBreakfast = mockFilterMealByCategory(mealsFilterByBreakfast);

    const maxBreakfastCards = 7;

    const breakfastFilterOption = await screen.findByTestId('Breakfast-category-filter');
    fireEvent.click(breakfastFilterOption);

    expect(mockFilterMealByBreakfast).toBeCalled();
    expect(mockFilterMealByBreakfast).toBeCalledTimes(1);

    const cards = await screen.findAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(maxBreakfastCards);
    expect(cards.length).not.toBe(maxBreakfastCards + 1);

    const { meals } = mealsFilterByBreakfast;
    await testMealsRecipeCard(meals, maxBreakfastCards);
  });

  it(`Caso as receitas sejam de comida e a categoria seja "Chicken", deve-se carregar as 
  12 primeiras receitas de "Chicken"`, async () => {
    renderWithRouterAndStore(<Foods />, '/comidas');
    const mockFilterMealByChicken = mockFilterMealByCategory(mealsFilterByChicken);

    const chickenFilterOption = await screen.findByTestId('Chicken-category-filter');
    fireEvent.click(chickenFilterOption);

    expect(mockFilterMealByChicken).toBeCalled();
    expect(mockFilterMealByChicken).toBeCalledTimes(1);

    const cards = await screen.findAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(maxDefaultCards);
    expect(cards.length).not.toBe(maxDefaultCards + 1);

    const { meals } = mealsFilterByChicken;
    await testMealsRecipeCard(meals, maxDefaultCards);
  });

  it(`Caso as receitas sejam de comida e a categoria seja "Dessert", deve-se carregar as 
  12 primeiras receitas de "Dessert"`, async () => {
    renderWithRouterAndStore(<Foods />, '/comidas');
    const mockFilterMealByDessert = mockFilterMealByCategory(mealsFilterByDessert);

    const dessertFilterOption = await screen.findByTestId('Dessert-category-filter');
    fireEvent.click(dessertFilterOption);

    expect(mockFilterMealByDessert).toBeCalled();
    expect(mockFilterMealByDessert).toBeCalledTimes(1);

    const cards = await screen.findAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(maxDefaultCards);
    expect(cards.length).not.toBe(maxDefaultCards + 1);

    const { meals } = mealsFilterByDessert;
    await testMealsRecipeCard(meals, maxDefaultCards);
  });

  it(`Caso as receitas sejam de comida e a categoria seja "Goat", deve-se carregar as 
  12 primeiras receitas de "Goat"`, async () => {
    renderWithRouterAndStore(<Foods />, '/comidas');
    const mockFilterMealByGoat = mockFilterMealByCategory(mealsFilterByGoat);

    const goatFilterOption = await screen.findByTestId('Goat-category-filter');
    fireEvent.click(goatFilterOption);

    expect(mockFilterMealByGoat).toBeCalled();
    expect(mockFilterMealByGoat).toBeCalledTimes(1);

    const cards = await screen.findAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(1);
    expect(cards.length).not.toBe(1 + 1);

    const { meals } = mealsFilterByGoat;
    await testMealsRecipeCard(meals, 1);
  });

  it(`Caso as receitas sejam de bebidas e a categoria seja "Ordinary Drink", deve-se 
  carregar as  12 primeiras receitas de "Ordinary Drink"`, async () => {
    renderWithRouterAndStore(<Drinks />, '/bebidas');
    const mockFilterDrinkByOrdinaryDrink = mockFilterDrinkByCategory(
      drinksFilterByOrdinaryDrink,
    );

    const ordinaryDrinkFilterOption = await screen
      .findByTestId('Ordinary Drink-category-filter');
    fireEvent.click(ordinaryDrinkFilterOption);

    expect(mockFilterDrinkByOrdinaryDrink).toBeCalled();
    expect(mockFilterDrinkByOrdinaryDrink).toBeCalledTimes(1);

    const cards = await screen.findAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(maxDefaultCards);
    expect(cards.length).not.toBe(maxDefaultCards + 1);

    const { drinks } = drinksFilterByOrdinaryDrink;
    await testDrinksRecipeCard(drinks, maxDefaultCards);
  });

  it(`Caso as receitas sejam de bebidas e a categoria seja "Cocktail", deve-se 
  carregar as  12 primeiras receitas de "Cocktail"`, async () => {
    renderWithRouterAndStore(<Drinks />, '/bebidas');
    const mockFilterDrinkByCocktail = mockFilterDrinkByCategory(
      drinksFilterByCocktail,
    );

    const cocktailFilterOption = await screen
      .findByTestId('Cocktail-category-filter');
    fireEvent.click(cocktailFilterOption);

    expect(mockFilterDrinkByCocktail).toBeCalled();
    expect(mockFilterDrinkByCocktail).toBeCalledTimes(1);

    const cards = await screen.findAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(maxDefaultCards);
    expect(cards.length).not.toBe(maxDefaultCards + 1);

    const { drinks } = drinksFilterByCocktail;
    await testDrinksRecipeCard(drinks, maxDefaultCards);
  });

  it(`Caso as receitas sejam de bebidas e a categoria seja "Milk/Float/Shake", deve-se 
  carregar as  12 primeiras receitas de "Milk/Float/Shake"`, async () => {
    renderWithRouterAndStore(<Drinks />, '/bebidas');
    const mockFilterDrinkByMilkFloatShake = mockFilterDrinkByCategory(
      drinksFilterByMilkFloatShake,
    );

    const milkFloatShakeFilterOption = await screen
      .findByTestId('Milk / Float / Shake-category-filter');
    fireEvent.click(milkFloatShakeFilterOption);

    expect(mockFilterDrinkByMilkFloatShake).toBeCalled();
    expect(mockFilterDrinkByMilkFloatShake).toBeCalledTimes(1);

    const cards = await screen.findAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(maxDefaultCards);
    expect(cards.length).not.toBe(maxDefaultCards + 1);

    const { drinks } = drinksFilterByMilkFloatShake;
    await testDrinksRecipeCard(drinks, maxDefaultCards);
  });

  it(`Caso as receitas sejam de bebidas e a categoria seja "Other/Unknown", deve-se 
  carregar as  12 primeiras receitas de "Other/Unknown"`, async () => {
    renderWithRouterAndStore(<Drinks />, '/bebidas');
    const mockFilterDrinkByOtherUnknown = mockFilterDrinkByCategory(
      drinksFilterByOtherUnknown,
    );

    const otherUnknownFilterOption = await screen
      .findByTestId('Other/Unknown-category-filter');
    fireEvent.click(otherUnknownFilterOption);

    expect(mockFilterDrinkByOtherUnknown).toBeCalled();
    expect(mockFilterDrinkByOtherUnknown).toBeCalledTimes(1);

    const cards = await screen.findAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(maxDefaultCards);
    expect(cards.length).not.toBe(maxDefaultCards + 1);

    const { drinks } = drinksFilterByOtherUnknown;
    await testDrinksRecipeCard(drinks, maxDefaultCards);
  });

  it(`Caso as receitas sejam de bebidas e a categoria seja "Cocoa", deve-se 
  carregar as  12 primeiras receitas de "Cocoa"`, async () => {
    renderWithRouterAndStore(<Drinks />, '/bebidas');
    const mockFilterDrinkByCocoa = mockFilterDrinkByCategory(
      drinksFilterByCocoa,
    );
    const maxCocoaCards = 9;
    const cocoaFilterOption = await screen
      .findByTestId('Cocoa-category-filter');
    fireEvent.click(cocoaFilterOption);

    expect(mockFilterDrinkByCocoa).toBeCalled();
    expect(mockFilterDrinkByCocoa).toBeCalledTimes(1);

    const cards = await screen.findAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(maxCocoaCards);
    expect(cards.length).not.toBe(maxCocoaCards + 1);

    const { drinks } = drinksFilterByCocoa;
    await testDrinksRecipeCard(drinks, maxCocoaCards);
  });
});
