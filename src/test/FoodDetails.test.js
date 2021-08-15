import React from 'react';
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import { cleanup, fireEvent, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import FoodDetails from '../pages/comidas/recipeId';

// const mealResponse = Promise.resolve({
//   json: () => Promise.resolve(oneMeal),
// });

// const mockOneMeal = jest.spyOn(global, 'fetch').mockImplementation(() => mealResponse);

const match = {
  params: {
    recipeId: '52771',
  },
};

const PHOTO_TEST_ID = 'recipe-photo';
const RECIPE_TITLE = 'recipe-title';
const SHARE_BTN = 'share-btn';
const FAV_BTN = 'favorite-btn';
const RECIPE_CATEGORY = 'recipe-category';
const INSTRUCTIONS = 'instructions';
const VIDEO_SRC = 'video';
const START_RECIPE_BTN = 'start-recipe-btn';
const INGREDIENTS = ['0', '1', '2', '3', '4', '5', '6', '7'];
const RECOMENDATION0 = '0-recomendation-card';
const RECOMENDATION1 = '1-recomendation-card';
const RECOMENDATION2 = '2-recomendation-card';
const RECOMENDATION3 = '3-recomendation-card';
const RECOMENDATION4 = '4-recomendation-card';
const RECOMENDATION5 = '5-recomendation-card';
const IN_PROGRESS_PATH = '/comidas/52771/in-progress';
let MEAL_PATH = '/comidas/52771';
// const CHECKBOX0 = '0-checkbox';

const testHistory = createMemoryHistory({ initialEntries: [MEAL_PATH] });
describe('Testa a página de detalhes da receita', () => {
  const store = {
    inProgressRecipes: {
      cocktails: {},
      meals: {
        52771: [0],
      },
    },
  };
  spyOn(localStorage, 'getItem').mockImplementation((key) => store[key]);

  beforeEach(() => {
    MEAL_PATH = '/comidas/52771';
  });
  afterEach(cleanup);

  it('Testa se o elemento de loading está na tela', () => {
    renderWithRouter(<FoodDetails match={ match } />, testHistory);
    const loading = screen.getByText(/Loading/i);

    expect(loading).toBeInTheDocument();
  });

  it('Testa se os elementos corretos estão todos na tela', async () => {
    const {
      findByTestId,
      findByText,
    } = renderWithRouter(<FoodDetails match={ match } />, testHistory);
    const ingredientsString = await findByText(/Ingredientes/i);
    const img = await findByTestId(PHOTO_TEST_ID);
    const title = await findByTestId(RECIPE_TITLE);
    const shareBtn = await findByTestId(SHARE_BTN);
    const favBtn = await findByTestId(FAV_BTN);
    const category = await findByTestId(RECIPE_CATEGORY);
    const instructions = await findByTestId(INSTRUCTIONS);
    const videoSrc = await findByTestId(VIDEO_SRC);
    const startBtn = await findByTestId(START_RECIPE_BTN);
    const recomendation0 = await findByTestId(RECOMENDATION0);
    const recomendation1 = await findByTestId(RECOMENDATION1);
    const recomendation2 = await findByTestId(RECOMENDATION2);
    const recomendation3 = await findByTestId(RECOMENDATION3);
    const recomendation4 = await findByTestId(RECOMENDATION4);
    const recomendation5 = await findByTestId(RECOMENDATION5);

    await act(async () => {
      INGREDIENTS.forEach(async (el) => {
        const ingredient = await screen.findByTestId(`${el}-ingredient-name-and-measure`);
        expect(ingredient).toBeInTheDocument();
      });
    });

    expect(ingredientsString).toBeInTheDocument();
    expect(ingredientsString).toHaveTextContent('Ingredientes');
    expect(img).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Spicy Arrabiata Penne');
    expect(shareBtn).toBeInTheDocument();
    expect(favBtn).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(instructions).toBeInTheDocument();
    expect(videoSrc).toBeInTheDocument();
    expect(recomendation0).toBeInTheDocument();
    expect(recomendation1).toBeInTheDocument();
    expect(recomendation2).toBeInTheDocument();
    expect(recomendation3).toBeInTheDocument();
    expect(recomendation4).toBeInTheDocument();
    expect(recomendation5).toBeInTheDocument();
    expect(startBtn).toBeInTheDocument();
    // expect(mockOneMeal).toBeCalled();
  });

  it('Botão deve iniciar como iniciar receita e após o click, continuar receita',
    async () => {
      const {
        findByTestId,
        history,
      } = renderWithRouter(<FoodDetails match={ match } />, testHistory);
      const startBtnBefore = await findByTestId(START_RECIPE_BTN);
      expect(startBtnBefore).toHaveTextContent('Iniciar Receita');

      fireEvent.click(startBtnBefore);

      expect(history.location.pathname).toEqual(IN_PROGRESS_PATH);
      history.push(IN_PROGRESS_PATH);
      MEAL_PATH = IN_PROGRESS_PATH;
      // const el = container.querySelectorAll('input');
      // console.log(el[0]);
      const checkBox = await findByTestId('0-checkbox');
      fireEvent(checkBox);
      // const x = findByTestId('finish-recipe-btn');
      // await wait(() => expect(x).toBeInTheDocument());
      // console.log(Array.of(container.parentNode));
      // const startBtnAfter = await findByTestId(START_RECIPE_BTN);
      // expect(startBtnAfter).toBeInTheDocument();
      // expect(startBtnAfter).toHaveTextContent('Continuar Receita');
      // const startBtnBefore = findByTestId(START_RECIPE_BTN);
    });

  // it('Espera que o botão de iniciar mude para continuar', async () => {
  //   const {
  //     findByTestId,
  //   } = renderWithRouter(<FoodDetails match={ match } />, testHistory);
  //   const startBtnBefore = await findByTestId(START_RECIPE_BTN);
  //   expect(startBtnBefore).toHaveTextContent('Inicsiar Receita');
  // });
});
