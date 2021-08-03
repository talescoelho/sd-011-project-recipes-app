import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouterAndStore } from './helper/testConfig';
import { mealsFiltersOptions } from './mocks/mockFilterOptions';
import mealsFiltersByAll from './mocks/meals/mockFilterMealsByAll';
import mealsFilterByBeef from './mocks/meals/mockFilterByBeef';
import mealsFilterByBreakfast from './mocks/meals/mockFilterByBreakfast';
import mealsFilterByChicken from './mocks/meals/mockFilterByChicken';
import mealsFilterByDessert from './mocks/meals/mockFilterByDessert';
import mealsFilterByGoat from './mocks/meals/mockFilterByGoat';
import Foods from '../pages/Foods';
import * as requestMenu from '../services/requestMenu';

const testRecipeCard = async (menu, maxCards) => {
  const reduceToMaxCards = menu.slice(0, maxCards);
  await Promise.all(
    reduceToMaxCards.map(async ({ idMeal, strMeal, strMealThumb }, index) => {
      const foodCard = await screen.findByTestId(`${index}-recipe-card`);
      const foodCardImg = await screen.findByTestId(`${index}-card-img`);
      const foodCardName = await screen.findByTestId(`${index}-card-name`);

      expect(foodCard).toBeInTheDocument();
      expect(foodCard).toHaveAttribute('href', `/comidas/${idMeal}`);
      expect(foodCardImg).toHaveAttribute('src', strMealThumb);
      expect(foodCardName).toHaveTextContent(strMeal);
    }),
  );
};

const maxDefaultCards = 12;

const mockedSearchMealByName = jest
  .spyOn(requestMenu, 'searchMealByName')
  .mockImplementation(() => Promise.resolve(mealsFiltersByAll));

const mockedRequestAllMealCategories = jest
  .spyOn(requestMenu, 'requestAllMealCategories')
  .mockImplementation(() => Promise.resolve(mealsFiltersOptions));

const mockFilterMealByCategory = (category) => (
  jest
    .spyOn(requestMenu, 'filterMealByCategory')
    .mockImplementation(() => Promise.resolve(category))
);

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
    await testRecipeCard(meals, maxDefaultCards);

    expect(screen.queryByTestId('12-recipe-card')).toBeNull();
    expect(screen.queryByTestId('12-recipe-img')).toBeNull();
    expect(screen.queryByTestId('12-recipe-name')).toBeNull();
  });
});

describe('26 - Carregue as 12 primeiras receitas de comidas, uma em cada card',
  () => {
    it('Deve carregar as 12 primeiras receitas de comida', async () => {
      renderWithRouterAndStore(<Foods />, '/comidas');
      const { meals } = mealsFiltersByAll;
      await testRecipeCard(meals, maxDefaultCards);

      expect(screen.queryByTestId('12-recipe-card')).toBeNull();
      expect(screen.queryByTestId('12-recipe-img')).toBeNull();
      expect(screen.queryByTestId('12-recipe-name')).toBeNull();
    });
  });

describe('27 - Implemente os botões de categoria para serem utilizados como filtro',
  () => {
    it(`Caso as receitas sejam de comida, deve-se exibir as 5 primeiras categorias de 
    comida`, async () => {
      renderWithRouterAndStore(<Foods />, '/comidas');

      const beefFilterOption = await screen.findByTestId('Beef-category-filter');
      const breakfastFilterOption = await screen
        .findByTestId('Breakfast-category-filter');
      const chickenFilterOption = await screen.findByTestId('Chicken-category-filter');
      const dessertFilterOption = await screen.findByTestId('Dessert-category-filter');
      const goatFilterOption = await screen.findByTestId('Goat-category-filter');

      expect(beefFilterOption).toBeInTheDocument();
      expect(beefFilterOption).toHaveTextContent('Beef');
      expect(breakfastFilterOption).toBeInTheDocument();
      expect(breakfastFilterOption).toHaveTextContent('Breakfast');
      expect(chickenFilterOption).toBeInTheDocument();
      expect(chickenFilterOption).toHaveTextContent('Chicken');
      expect(dessertFilterOption).toBeInTheDocument();
      expect(dessertFilterOption).toHaveTextContent('Dessert');
      expect(goatFilterOption).toBeInTheDocument();
      expect(goatFilterOption).toHaveTextContent('Goat');

      const filterButtons = await screen.findAllByRole('button', { name: 'filter-btn' });

      const maxFilterButtons = 6;

      expect(filterButtons.length).toBe(maxFilterButtons);
      expect(filterButtons.length).not.toBe(maxFilterButtons + 1);
    });
  });

describe(`28 - Implemente o filtro das receitas através da API ao clicar no filtro de 
  categoria`, () => {
  it(`Caso as receitas sejam de comida e a categoria seja "Beef", deve-se carregar as 
    12 primeiras receitas de "Beef"`, async () => {
    const mockFilterMealByBeef = mockFilterMealByCategory(mealsFilterByBeef);

    renderWithRouterAndStore(<Foods />, '/comidas');

    const beefFilterOption = await screen.findByTestId('Beef-category-filter');
    fireEvent.click(beefFilterOption);

    expect(mockFilterMealByBeef).toBeCalled();
    expect(mockFilterMealByBeef).toBeCalledTimes(1);

    const cards = await screen.findAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(maxDefaultCards);
    expect(cards.length).not.toBe(maxDefaultCards + 1);

    const { meals } = mealsFilterByBeef;
    await testRecipeCard(meals, maxDefaultCards);
  });

  it(`Caso as receitas sejam de comida e a categoria seja "Breakfast", deve-se 
  carregar as 12 primeiras receitas de "Breakfast"`, async () => {
    const mockFilterMealByBreakfast = mockFilterMealByCategory(mealsFilterByBreakfast);

    renderWithRouterAndStore(<Foods />, '/comidas');

    const maxBreakfastCards = 7;

    const breakfastFilterOption = await screen.findByTestId('Breakfast-category-filter');
    fireEvent.click(breakfastFilterOption);

    expect(mockFilterMealByBreakfast).toBeCalled();
    expect(mockFilterMealByBreakfast).toBeCalledTimes(1);

    const cards = await screen.findAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(maxBreakfastCards);
    expect(cards.length).not.toBe(maxBreakfastCards + 1);

    const { meals } = mealsFilterByBreakfast;
    await testRecipeCard(meals, maxBreakfastCards);
  });

  it(`Caso as receitas sejam de comida e a categoria seja "Chicken", deve-se carregar as 
  12 primeiras receitas de "Chicken"`, async () => {
    const mockFilterMealByChicken = mockFilterMealByCategory(mealsFilterByChicken);

    renderWithRouterAndStore(<Foods />, '/comidas');

    const chickenFilterOption = await screen.findByTestId('Chicken-category-filter');
    fireEvent.click(chickenFilterOption);

    expect(mockFilterMealByChicken).toBeCalled();
    expect(mockFilterMealByChicken).toBeCalledTimes(1);

    const cards = await screen.findAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(maxDefaultCards);
    expect(cards.length).not.toBe(maxDefaultCards + 1);

    const { meals } = mealsFilterByChicken;
    await testRecipeCard(meals, maxDefaultCards);
  });

  it(`Caso as receitas sejam de comida e a categoria seja "Dessert", deve-se carregar as 
  12 primeiras receitas de "Dessert"`, async () => {
    const mockFilterMealByDessert = mockFilterMealByCategory(mealsFilterByDessert);

    renderWithRouterAndStore(<Foods />, '/comidas');

    const dessertFilterOption = await screen.findByTestId('Dessert-category-filter');
    fireEvent.click(dessertFilterOption);

    expect(mockFilterMealByDessert).toBeCalled();
    expect(mockFilterMealByDessert).toBeCalledTimes(1);

    const cards = await screen.findAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(maxDefaultCards);
    expect(cards.length).not.toBe(maxDefaultCards + 1);

    const { meals } = mealsFilterByDessert;
    await testRecipeCard(meals, maxDefaultCards);
  });

  it(`Caso as receitas sejam de comida e a categoria seja "Goat", deve-se carregar as 
  12 primeiras receitas de "Goat"`, async () => {
    const mockFilterMealByGoat = mockFilterMealByCategory(mealsFilterByGoat);

    renderWithRouterAndStore(<Foods />, '/comidas');

    const goatFilterOption = await screen.findByTestId('Goat-category-filter');
    fireEvent.click(goatFilterOption);

    expect(mockFilterMealByGoat).toBeCalled();
    expect(mockFilterMealByGoat).toBeCalledTimes(1);

    const cards = await screen.findAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(1);
    expect(cards.length).not.toBe(1 + 1);

    const { meals } = mealsFilterByGoat;
    await testRecipeCard(meals, 1);
  });
});

describe(`29 - Implemente o filtro como um toggle, que se for selecionado de novo, o app 
deve retornar as receitas sem nenhum filtro`, () => {
  it(`Caso as receitas sejam de comida e o filtro tenha sido selecionado novamente, 
  deve-se retornar as 12 primeiras receitas sem filtro`, async () => {
    mockFilterMealByCategory(mealsFilterByBeef);

    renderWithRouterAndStore(<Foods />, '/comidas');

    const beefFilterOption = await screen.findByTestId('Beef-category-filter');
    fireEvent.click(beefFilterOption);
    fireEvent.click(beefFilterOption);

    const { meals } = mealsFiltersByAll;
    await testRecipeCard(meals, maxDefaultCards);
  });
});

describe(`30 - Implemente o filtro de categoria para que apenas um seja selecionado por 
vez`, () => {
  it(`Caso as receitas sejam de comida apenas um filtro de categoria deve poder ser 
  selecionado por vez`, async () => {
    renderWithRouterAndStore(<Foods />, '/comidas');

    mockFilterMealByCategory(mealsFilterByBeef);

    const beefFilterOption = await screen.findByTestId(
      'Beef-category-filter',
    );
    fireEvent.click(beefFilterOption);

    const { meals: beefMeals } = mealsFilterByBeef;
    await testRecipeCard(beefMeals, maxDefaultCards);

    mockFilterMealByCategory(mealsFilterByBreakfast);

    const breakfastFilterOption = await screen.findByTestId(
      'Breakfast-category-filter',
    );
    fireEvent.click(breakfastFilterOption);

    const { meals: breakfastMeals } = mealsFilterByBreakfast;
    await testRecipeCard(breakfastMeals, maxDefaultCards);

    mockFilterMealByCategory(mealsFilterByChicken);

    const chickenFilterOption = await screen.findByTestId(
      'Chicken-category-filter',
    );
    fireEvent.click(chickenFilterOption);

    const { meals: chickenMeals } = mealsFilterByChicken;
    await testRecipeCard(chickenMeals, maxDefaultCards);

    mockFilterMealByCategory(mealsFilterByDessert);

    const dessertFilterOption = await screen.findByTestId(
      'Dessert-category-filter',
    );
    fireEvent.click(dessertFilterOption);

    const { meals: dessertMeals } = mealsFilterByDessert;
    await testRecipeCard(dessertMeals, maxDefaultCards);

    mockFilterMealByCategory(mealsFilterByGoat);

    const goatFilterOption = await screen.findByTestId(
      'Goat-category-filter',
    );
    fireEvent.click(goatFilterOption);

    const { meals: goatMeals } = mealsFilterByGoat;
    await testRecipeCard(goatMeals, maxDefaultCards);
  });
});
