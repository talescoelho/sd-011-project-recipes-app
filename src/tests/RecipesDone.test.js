import React from 'react';
import RecipesDone from '../pages/RecipesDone';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';

const INITIAL_STATE = {
  RecipesReducer: {
    recipesData: { meals: [] },
    recipeDetailsData: [],
    recipesRedirectData: [],
    isLoading: false,
    showRecipe: false,
  },
};
const recipe = {
  id: '17203',
  type: 'bebida',
  area: '',
  category: 'Ordinary Drink',
  alcoholicOrNot: 'Alcoholic',
  name: 'Kir',
  image: 'https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg',
  doneDate: '10/08/2021 17:44:13',
  tags: ['IBA,ContemporaryClassic'],
};

describe('Testes para página de Receitas Feitas', () => {
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(),
    });
    localStorage.setItem('doneRecipes', JSON.stringify([recipe]));
    const { findByText, findByTestId } = renderWithRouterAndRedux(
      <RecipesDone />,
      { route: '/receitas-favoritas' }, INITIAL_STATE,
    );
    console.log(localStorage.doneRecipes);
    const text = await findByText(/Receitas Feitas/i);
    const title = await findByTestId('page-title');
    const image = await findByTestId('0-horizontal-image');
    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
