import React from 'react';
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';
// import oneDrink from '../../cypress/mocks/oneDrink';
import renderWithRouter from './renderWithRouter';
import DrinkDetails from '../pages/bebidas/recipeId';

// const mealResponse = Promise.resolve({
//   json: () => Promise.resolve(oneMeal),
// });

// const mockOneMeal = jest.spyOn(global, 'fetch').mockImplementation(() => mealResponse);

const match = {
  params: {
    recipeId: '178319',
  },
};

const PHOTO_TEST_ID = 'recipe-photo';
const RECIPE_TITLE = 'recipe-title';
const SHARE_BTN = 'share-btn';
const FAV_BTN = 'favorite-btn';
const RECIPE_CATEGORY = 'recipe-category';
const INSTRUCTIONS = 'instructions';
const START_RECIPE_BTN = 'start-recipe-btn';
const INGREDIENTS = ['0', '1', '2'];
const RECOMENDATIONS = ['0', '1', '2', '3', '4', '5', '6'];

const history = createMemoryHistory({ initialEntries: ['/bebidas/178319'] });

// afterEach(() => jest.clearAllMocks());

describe('Testa a página de detalhes da receita', () => {
  it('Testa se o elemento de loading está na tela', () => {
    renderWithRouter(<DrinkDetails match={ match } />, history);
    const loading = screen.getByText(/Loading/i);

    expect(loading).toBeInTheDocument();
  });

  it('Testa se os elementos corretos estão todos na tela', async () => {
    await act(async () => {
      renderWithRouter(<DrinkDetails match={ match } />, history);
    });
    const ingredientsString = await screen.findByText(/Ingredientes/i);
    const img = await screen.findByTestId(PHOTO_TEST_ID);
    const title = await screen.findByTestId(RECIPE_TITLE);
    const shareBtn = await screen.findByTestId(SHARE_BTN);
    const favBtn = await screen.findByTestId(FAV_BTN);
    const category = await screen.findByTestId(RECIPE_CATEGORY);
    const instructions = await screen.findByTestId(INSTRUCTIONS);
    const startBtn = await screen.findByTestId(START_RECIPE_BTN);

    await act(async () => {
      INGREDIENTS.forEach(async (el) => {
        const ingredient = await screen.findByTestId(`${el}-ingredient-name-and-measure`);
        expect(ingredient).toBeInTheDocument();
      });
    });

    act(() => {
      RECOMENDATIONS.forEach(async (el) => {
        const recomendation = await screen.findByTestId(`${el}-recomendation-card`);
        expect(recomendation).toBeInTheDocument();
      });
    });

    expect(ingredientsString).toBeInTheDocument();
    expect(ingredientsString).toHaveTextContent('Ingredientes');
    expect(img).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Aquamarine');
    expect(shareBtn).toBeInTheDocument();
    expect(favBtn).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(instructions).toBeInTheDocument();
    expect(startBtn).toBeInTheDocument();
    // expect(mockOneMeal).toBeCalled();
  });
});
