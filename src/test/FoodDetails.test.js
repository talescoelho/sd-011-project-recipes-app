import React from 'react';
import { createMemoryHistory } from 'history';
import { screen } from '@testing-library/react';
import oneMeal from '../../cypress/mocks/oneMeal';
// import oneDrink from '../../cypress/mocks/oneDrink';
import renderWithRouter from './renderWithRouter';
import FoodDetails from '../pages/comidas/recipeId';

const mealResponse = Promise.resolve({
  json: () => Promise.resolve(oneMeal),
}).then(() => oneMeal);

// const mealResponse = new Promise((resolve, reject) => {
//   try {
//     console.log('entrou try')
//     resolve(oneMeal);
//   } catch (error) {
//     console.log('entrou catch')
//     reject(new Error(error));
//   }
// });

// const mealResponse = new Promise((resolve, reject) => {
//   try {
//     resolve({ json: () => oneMeal })
//   } catch (error) {
//     console.log('entrou catch')
//     reject(new Error(error));
//   }
// });

// const mealResponse = new Promise((resolve) => resolve({ json: () => oneMeal }));
// Promise.resolve()
//   .catch((error) => console.log(error));

const mockOneMeal = jest.spyOn(global, 'fetch').mockImplementation(() => mealResponse);

const match = {
  params: {
    recipeId: '52771',
  },
};

const PHOTO_TEST_ID = 'recipe-photo';

const history = createMemoryHistory({ initialEntries: ['/comidas/52771'] });

afterEach(() => jest.clearAllMocks());

describe('Testa a página de detalhes da receita', () => {
  it('Testa se os elementos corretos estão todos na tela', () => {
    renderWithRouter(<FoodDetails match={ match } />, history);
    const loading = screen.getByText(/Loading/i);

    expect(loading).toBeInTheDocument();
  });

  it('Testa se encontra elementos da página', async () => {
    renderWithRouter(<FoodDetails match={ match } />, history);
    const text = await screen.findByText(/Ingredientes/i);
    const img = await screen.findByTestId(PHOTO_TEST_ID);

    expect(text).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(mockOneMeal).toBeCalled();
  });
});
