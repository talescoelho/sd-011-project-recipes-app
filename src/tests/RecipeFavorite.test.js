import React from 'react';
import userEvent from '@testing-library/user-event';
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
    const { findByText, findByTestId, getByRole } = renderWithRouterAndRedux(
      <RecipeFavorite />,
      { route: '/receitas-favoritas' }, INITIAL_STATE,
    );
    const type = await findByText(/Receitas Favoritas/i);
    const title = await findByTestId('page-title');
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    const Food = await getByRole('button', { name: /Food/i });
    expect(Food).toBeInTheDocument();
    userEvent.click(Food);
    const Drinks = await getByRole('button', { name: /Drinks/i });
    expect(Drinks).toBeInTheDocument();
    const All = await getByRole('button', { name: /all/i });
    expect(All).toBeInTheDocument();
    userEvent.click(All);
    const favorite = await findByTestId('0-horizontal-favorite-btn');
    userEvent.click(favorite);
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
