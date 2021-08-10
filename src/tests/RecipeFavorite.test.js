import React from 'react';
import RecipeFavorite from '../pages/RecipeFavorite';
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

const recipe = [
  {
    id: '17203',
    type: 'bebida',
    area: '',
    alcoholicOrNot: 'Alcoholic',
    name: 'Kir',
    image: 'https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg',
    category: 'Ordinary Drink',
  },
];

describe('Testes para página de Perfil', () => {
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(),
    });
    localStorage.setItem('favoriteRecipes', JSON.stringify([recipe]));
    const { findByText, findByTestId } = renderWithRouterAndRedux(
      <RecipeFavorite />,
      { route: '/receitas-favoritas' }, INITIAL_STATE,
    );
    const type = await findByText(/Receitas Favoritas/i);
    const title = await findByTestId('page-title');
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
