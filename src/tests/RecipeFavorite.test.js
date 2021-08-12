import React from 'react';
import userEvent from '@testing-library/user-event';
import RecipeFavorite from '../pages/RecipeFavorite';
import DrinkDetails from '../pages/DrinkDetails';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import mockDrink from '../../cypress/mocks/oneDrink';
import mockMeals from '../../cypress/mocks/meals';

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
  {
    id: '52940',
    type: 'comida',
    area: 'Jamaican',
    alcoholicOrNot: '',
    name: 'Brown Stew Chicken',
    image: 'https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg',
    category: 'Chicken',
  },
];

const mockURL = '/receitas-favoritas';

describe('Testes para página de Perfil', () => {
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockMeals),
    });
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockDrink),
    });
    localStorage.setItem('favoriteRecipes', JSON.stringify(recipe));
    const { findByText, findByTestId, getByRole } = renderWithRouterAndRedux(
      <RecipeFavorite />,
      { route: mockURL }, INITIAL_STATE,
    );
    const localStorage1 = JSON.parse(localStorage.favoriteRecipes);
    const type = await findByText(/Receitas Favoritas/i);
    const title = await findByTestId('page-title');
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    const title1 = await findByTestId('0-horizontal-name');
    const name1 = localStorage1[0].name;
    expect((title1.innerHTML).replace(' ', '')).toEqual(name1);
    const favorite = await findByTestId('0-horizontal-favorite-btn');
    userEvent.click(favorite);
    const localStorage2 = JSON.parse(localStorage.favoriteRecipes);
    expect(localStorage2.length).toEqual(1);
    const Food = await getByRole('button', { name: /Food/i });
    expect(Food).toBeInTheDocument();
    userEvent.click(Food);
    const Drinks = await getByRole('button', { name: /Drinks/i });
    expect(Drinks).toBeInTheDocument();
    const All = await getByRole('button', { name: /all/i });
    expect(All).toBeInTheDocument();
    userEvent.click(All);
    const newfavorite = await findByTestId('0-horizontal-favorite-btn');
    expect(newfavorite.src).toEqual('http://localhost/blackHeartIcon.svg');
    const btnRemove = await findByTestId('btn-remove-favorite');
    expect(btnRemove).toBeInTheDocument();
    userEvent.click(newfavorite);
    const localStorage3 = JSON.parse(localStorage.favoriteRecipes);
    expect(localStorage3.length).toEqual(0);
  });
  it('Verifica Links', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(),
    });
    localStorage.setItem('favoriteRecipes', JSON.stringify(recipe));
    const { history, findByTestId, findByText } = renderWithRouterAndRedux(
      <RecipeFavorite />,
      { route: mockURL }, INITIAL_STATE,
    );
    const firstCard = await findByTestId('0-horizontal-name');
    expect(firstCard).toBeInTheDocument();
    userEvent.click(firstCard);
    expect(history.location.pathname).toEqual('/bebidas/17203');
    renderWithRouterAndRedux(
      <DrinkDetails match={ { params: { id: '17203' } } } />,
      { route: '/bebidas/17203' }, INITIAL_STATE,
    );
    const drinkTitle = await findByText(/Kir/i);
    expect(drinkTitle).toBeInTheDocument();
  });
  it('Verifica ShareBtn', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(),
    });
    localStorage.setItem('favoriteRecipes', JSON.stringify(recipe));
    const { findByTestId } = renderWithRouterAndRedux(
      <RecipeFavorite />,
      { route: mockURL }, INITIAL_STATE,
    );
    const firstShare = await findByTestId('0-horizontal-share-btn');
    expect(firstShare).toBeInTheDocument();
    userEvent.click(firstShare);
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
