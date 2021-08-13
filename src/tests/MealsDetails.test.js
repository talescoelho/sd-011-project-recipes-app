// HomeMeals.test.js
import React from 'react';
import userEvent from '@testing-library/user-event';
import MealDetails from '../pages/MealDetails';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import mockMeal from '../../cypress/mocks/oneMeal';
import mockDrinks from '../../cypress/mocks/drinks';

const INITIAL_STATE = {
  RecipesReducer: {
    recipesData: { drinks: [] },
    recipeDetailsData: [],
    recipesRedirectData: [],
    isLoading: false,
    showRecipe: false,
  },
};

const itemToSet = {
  alcoholicOrNot: '',
  area: 'Jamaican',
  category: 'Chicken',
  id: '52940',
  image: 'https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg',
  name: 'Brown Stew Chicken',
  type: 'comida',
};

const mockRoute = '/comidas/52771';
const recipeTitle = 'recipe-title';

describe('Testes para página de HomeComidas', () => {
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockDrinks),
    });
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockMeal),
    });
    const { findByText, findByTestId, getByRole } = renderWithRouterAndRedux(
      <MealDetails match={ { params: { id: '52771' }, url: `http://localhost:3000/${mockRoute}` } } />,
      { route: mockRoute }, INITIAL_STATE,
    );
    const type = await findByText(/vegetarian/i);
    const title = await findByTestId(recipeTitle);
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    const favorite = await findByTestId('favorite-btn');
    expect(favorite).toBeInTheDocument();
    const whiteIcon = getByRole('img', { name: /favorite icon/i });
    expect(whiteIcon.src).toEqual('http://localhost/whiteHeartIcon.svg');
    expect(whiteIcon).toBeInTheDocument();
    userEvent.click(favorite);
    const blackIcon = getByRole('img', { name: /favorite icon/i });
    expect(blackIcon.src).toEqual('http://localhost/blackHeartIcon.svg');
    const localStorageWithFavorite = JSON.parse(localStorage.favoriteRecipes);
    expect(localStorageWithFavorite[0].id).toEqual('52771');
    userEvent.click(blackIcon);
    const emptyLocalStorage = JSON.parse(localStorage.favoriteRecipes);
    expect(emptyLocalStorage).toEqual([]);
    const firstIngredient = await findByTestId('0-ingredient-name-and-measure');
    expect(firstIngredient).toBeInTheDocument();
    const recomendaitonCard1 = await findByTestId('1-recomendation-card');
    expect(recomendaitonCard1).toBeInTheDocument();
    userEvent.click(recomendaitonCard1);
  });
  it('Verifica favoritar quando há itens no localStorage', async () => {
    jest.spyOn(global, 'fetch');
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockDrinks),
    });
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockMeal),
    });
    localStorage.setItem('favoriteRecipes', JSON.stringify([itemToSet]));
    const { findByText, findByTestId, getByRole } = renderWithRouterAndRedux(
      <MealDetails match={ { params: { id: '52771' }, url: `http://localhost:3000/${mockRoute}` } } />,
      { route: mockRoute }, INITIAL_STATE,
    );
    const type = await findByText(/vegetarian/i);
    const title = await findByTestId(recipeTitle);
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    const whiteIcon = getByRole('img', { name: /favorite icon/i });
    expect(whiteIcon.src).toEqual('http://localhost/whiteHeartIcon.svg');
    expect(whiteIcon).toBeInTheDocument();
    userEvent.click(whiteIcon);
  });
  it('Verifica se há vídeo', async () => {
    jest.spyOn(global, 'fetch');
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockDrinks),
    });
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockMeal),
    });
    const { findByTitle, findByText, findByTestId } = renderWithRouterAndRedux(
      <MealDetails match={ { params: { id: '52771' }, url: `http://localhost:3000/${mockRoute}` } } />,
      { route: mockRoute }, INITIAL_STATE,
    );
    const type = await findByText(/vegetarian/i);
    const title = await findByTestId(recipeTitle);
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    const video = await findByTitle(/recipe video/i);
    expect(video).toBeInTheDocument();
    expect(video.src).toEqual('https://www.youtube.com/embed/1IszT_guI08');
  });
  it('Verifica se há botão iniciar receita', async () => {
    jest.spyOn(global, 'fetch');
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockDrinks),
    });
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockMeal),
    });
    const { findByText, findByTestId } = renderWithRouterAndRedux(
      <MealDetails match={ { params: { id: '52771' }, url: `http://localhost:3000/${mockRoute}` } } />,
      { route: mockRoute }, INITIAL_STATE,
    );
    const btnStart = await findByText(/iniciar/i);
    const title = await findByTestId(recipeTitle);
    expect(btnStart).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    userEvent.click(btnStart);
    const newlocalStorage = JSON.parse(localStorage.inProgressRecipes);
    const propToVerify = newlocalStorage.meals['52771'][0].name;
    expect(propToVerify).toEqual('penne rigate');
  });
  it('Verifica se há botão continuar receita', async () => {
    jest.spyOn(global, 'fetch');
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockDrinks),
    });
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockMeal),
    });
    const toSet = { meals: { 52771: {} } };
    localStorage.setItem('inProgressRecipes', JSON.stringify(toSet));
    const { findByText, findByTestId, history } = renderWithRouterAndRedux(
      <MealDetails match={ { params: { id: '52771' }, url: `http://localhost:3000/${mockRoute}` } } />,
      { route: mockRoute }, INITIAL_STATE,
    );
    const btnContiue = await findByText(/continuar/i);
    const title = await findByTestId(recipeTitle);
    expect(history.location.pathname).toEqual('/comidas/52771');
    expect(btnContiue).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    userEvent.click(btnContiue);
  });
  it('Verifica se há os itens procurados', () => {
    const { getByText } = renderWithRouterAndRedux(
      <MealDetails match={ { params: { id: '52771' } } } />,
      { route: mockRoute }, INITIAL_STATE,
    );

    const loading = getByText('Loading');
    expect(loading).toBeInTheDocument();
  });
  it('Verifica se não há botão continuar ou iniciar receita', async () => {
    jest.spyOn(global, 'fetch');
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockDrinks),
    });
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockMeal),
    });
    const toSet = [{ id: '52771' }];
    localStorage.setItem('doneRecipes', JSON.stringify(toSet));
    const { queryAllByText, findByTestId } = renderWithRouterAndRedux(
      <MealDetails match={ { params: { id: '52771' }, url: `http://localhost:3000/${mockRoute}` } } />,
      { route: mockRoute }, INITIAL_STATE,
    );
    const title = await findByTestId(recipeTitle);
    expect(title).toBeInTheDocument();
    const continuar = queryAllByText('Continuar Receita');
    expect(continuar.length).toEqual(0);
  });
  it('Verifica os endpoints chamados', async () => {
    jest.spyOn(global, 'fetch');
    const allDrinks = fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockDrinks),
    });
    const mealDetail = fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockMeal),
    });
    renderWithRouterAndRedux(
      <MealDetails match={ { params: { id: '52771' }, url: `http://localhost:3000/${mockRoute}` } } />,
      { route: mockRoute }, INITIAL_STATE,
    );
    expect(allDrinks).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    expect(mealDetail).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771');
  });
  // it('Testa Share Btn', async () => {
  //   jest.spyOn(global, 'fetch');
  //   fetch.mockResolvedValueOnce({
  //     json: jest.fn().mockResolvedValue(mockDrinks),
  //   });
  //   fetch.mockResolvedValueOnce({
  //     json: jest.fn().mockResolvedValue(mockMeal),
  //   });
  //   const { findByText, findByTestId } = renderWithRouterAndRedux(
  //     <MealDetails match={ { params: { id: '52771' }, url: `http://localhost:3000/${mockRoute}` } } />,
  //     { route: mockRoute }, INITIAL_STATE,
  //   );
  //   const share = await findByTestId('share-btn');
  //   expect(share).toBeInTheDocument();
  //   userEvent.click(share);
  //   const shareText = findByText(/Copiado/i);
  //   expect(shareText).toBeInTheDocument();

  //   // const down = await findByTestId('recipe-titsssle');
  // });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
