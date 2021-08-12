import React from 'react';
import userEvent from '@testing-library/user-event';
import ShareBtn from '../components/ShareBtn';
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

describe('Testes para ShareBtn', () => {
  // beforeEach(() => {
  //   window.getSelection = () => ({
  //     removeAllRanges: () => {},
  //   });
  // });
  it('Verifica searchBar', () => {
    jest.spyOn(global, 'fetch');
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(),
    });
    const { getByTestId, getByRole } = renderWithRouterAndRedux(
      <ShareBtn url="/comidas/53012" />,
      { route: '/comidas/53012' }, INITIAL_STATE,
    );
    const btn = getByTestId('share-btn');
    const image = getByRole('img', { name: /share icon/i });
    expect(btn).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    userEvent.click(btn);
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />

// console.log(store.getState());
