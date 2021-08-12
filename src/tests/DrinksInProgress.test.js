import React from 'react';
import userEvent from '@testing-library/user-event';
import DrinksInProgress from '../pages/DrinksInProgress';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import mockDrink from '../../cypress/mocks/oneDrink';

const INITIAL_STATE = {
  RecipesReducer: {
    recipesData: { meals: [] },
    recipeDetailsData: [],
    recipesRedirectData: [],
    isLoading: false,
    showRecipe: false,
  },
};

describe('Testes para página de Bebidas em Progresso', () => {
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockDrink),
    });
    const { findByText, findByTestId, getAllByRole } = renderWithRouterAndRedux(
      <DrinksInProgress
        match={ { params: { id: '178319' }, url: '/bebidas/178319/in-progress' } }
      />,
      { route: '/bebidas/178319/in-progress' }, INITIAL_STATE,
    );
    const type = await findByText(/Cocktail/i);
    const title = await findByTestId('recipe-title');
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    const finishBtn = await findByTestId('finish-recipe-btn');
    expect(finishBtn).toHaveAttribute('disabled');
    const localStorageInProgress = JSON.parse(localStorage.inProgressRecipes);
    expect(localStorageInProgress.cocktails['178319'][0].check).toEqual(false);
    const allCheckBox = getAllByRole('checkbox');
    allCheckBox.forEach((checkbox) => {
      userEvent.click(checkbox);
    });
    const newlocalStorageInProgress = JSON.parse(localStorage.inProgressRecipes);
    expect(newlocalStorageInProgress.cocktails['178319'][0].check).toEqual(true);
    userEvent.click(finishBtn);
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
