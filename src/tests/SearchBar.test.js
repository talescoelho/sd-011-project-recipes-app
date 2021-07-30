import React from 'react';
import SearchBar from '../components/SearchBar';
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react';
import { createStore, combineReducers } from 'redux';
import recipes from '../reducers';

const THREE = 3;

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ recipes }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={ store }>{component}</Provider>),
    store,
  }
}

describe('Testa o component SearchBar', () => {
  test('Tem os data-testids da barra e dos radio-buttons', () => {
    const { getByTestId } = renderWithRedux(<SearchBar />);
    const inputBar = getByTestId('search-input');
    const nameRadio = getByTestId('ingredient-search-radio');
    const firstLetterRadio = getByTestId('name-search-radio');
    const ingredientRadio = getByTestId('exec-search-btn');

    expect(inputBar).toBeInTheDocument();
    expect(nameRadio).toBeInTheDocument();
    expect(firstLetterRadio).toBeInTheDocument();
    expect(ingredientRadio).toBeInTheDocument();
  });
  
  test('Altera corretamente o valor dos inputs', () => {
    const { getByTestId } = renderWithRedux(<SearchBar />);
    
    const inputBar = getByTestId('search-input');
    expect(inputBar).toHaveValue('');
    fireEvent.change(inputBar, { target: { value: 'chicken' } });
    expect(inputBar).toHaveValue('chicken');
    
    const nameRadio = getByTestId('ingredient-search-radio');
    expect(nameRadio).toHaveValue('Nome');
    
    const firstLetterRadio = getByTestId('name-search-radio');
    expect(firstLetterRadio).toHaveValue('Primeira_Letra');

    const ingredientRadio = getByTestId('name-search-radio');
    expect(ingredientRadio).toHaveValue('Ingrediente');
  });
  
  test('Verifique se existem 3 radio buttons', () => {
    const { getAllByRole } = renderWithRedux(<SearchBar />);
    const radios = getAllByRole('radio');
    expect(radios).toHaveLength(THREE);
  });
});
