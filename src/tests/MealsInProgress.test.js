import React from 'react';
import userEvent from '@testing-library/user-event';
import MealsInProgress from '../pages/MealsInProgress';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import mockMeal from '../../cypress/mocks/oneMeal';

const INITIAL_STATE = {
  RecipesReducer: {
    recipesData: { meals: [] },
    recipeDetailsData: [],
    recipesRedirectData: [],
    isLoading: false,
    showRecipe: false,
  },
};

const mockRoute = '/comidas/52771/in-progress';

describe('Testes para página de Comidas em Progresso', () => {
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMeal),
    });
    const { getByRole, findByTestId, getAllByRole, history } = renderWithRouterAndRedux(
      <MealsInProgress
        match={ { params: { id: '52771' }, url: mockRoute } }
      />,
      { route: mockRoute }, INITIAL_STATE,
    );
    const title = await findByTestId('recipe-title');
    expect(title).toBeInTheDocument();
    const whiteIcon = getByRole('img', { name: /favorite icon/i });
    expect(whiteIcon.src).toEqual('http://localhost/whiteHeartIcon.svg');
    expect(whiteIcon).toBeInTheDocument();
    userEvent.click(whiteIcon);
    const blackIcon = getByRole('img', { name: /favorite icon/i });
    expect(blackIcon.src).toEqual('http://localhost/blackHeartIcon.svg');
    userEvent.click(blackIcon);
    const finishBtn = await findByTestId('finish-recipe-btn');
    expect(finishBtn).toHaveAttribute('disabled');
    const localStorageInProgress = JSON.parse(localStorage.inProgressRecipes);
    expect(localStorageInProgress.meals['52771'][0].check).toEqual(false);
    const allCheckBox = getAllByRole('checkbox');
    allCheckBox.forEach((checkbox) => {
      userEvent.click(checkbox);
    });
    const newlocalStorageInProgress = JSON.parse(localStorage.inProgressRecipes);
    expect(newlocalStorageInProgress.meals['52771'][0].check).toEqual(true);
    userEvent.click(finishBtn);
    expect(history.location.pathname).toEqual('/receitas-feitas');
    const localStorageDoneRecipes = JSON.parse(localStorage.doneRecipes);
    expect(localStorageDoneRecipes[0].id).toEqual('52771');
  });
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMeal),
    });
    const { findByText, findByTestId, getAllByRole } = renderWithRouterAndRedux(
      <MealsInProgress
        match={ { params: { id: '52771' }, url: mockRoute } }
      />,
      { route: mockRoute }, INITIAL_STATE,
    );
    const type = await findByText(/vegetarian/i);
    const title = await findByTestId('recipe-title');
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    const finishBtn = await findByTestId('finish-recipe-btn');
    expect(finishBtn).toHaveAttribute('disabled');
    const localStorageInProgress = JSON.parse(localStorage.inProgressRecipes);
    expect(localStorageInProgress.meals['52771'][0].check).toEqual(false);
    const allCheckBox = getAllByRole('checkbox');
    allCheckBox.forEach((checkbox) => {
      userEvent.click(checkbox);
    });
    expect(finishBtn).not.toHaveAttribute('disabled');
    allCheckBox.forEach((checkbox) => {
      userEvent.click(checkbox);
    });
    expect(finishBtn).toHaveAttribute('disabled');
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
