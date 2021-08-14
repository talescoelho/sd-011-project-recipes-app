import React from 'react';
import { fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import SearchBar from '../components/SearchBar';
import renderWithRouterAndStore from './testConfig';
import * as actions from '../actions';

const successResponseBody = {};
const mockFetchPromise = Promise.resolve({
  json: () => Promise.resolve(successResponseBody),
});
jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

jest.spyOn(window, 'alert').mockImplementation(() => {});

jest.spyOn(actions, 'foodRecipesByIngredient');
jest.spyOn(actions, 'foodRecipesByName');
jest.spyOn(actions, 'foodRecipesByLetter');
jest.spyOn(actions, 'drinkRecipesByIngredient');
jest.spyOn(actions, 'drinkRecipesByName');
jest.spyOn(actions, 'drinkRecipesByLetter');

const history = createMemoryHistory({ initialEntries: ['/comidas'] });
const SEARCH_INPUT = 'search-input';
const INGREDIENT_SEARCH_RADIO = 'ingredient-search-radio';
const NAME_SEARCH_RADIO = 'name-search-radio';
const FIRST_LETTER_SEARCH_RADIO = 'first-letter-search-radio';
const EXECT_SEARCH_BTN = 'exec-search-btn';

describe('SearchBar que é responsável pela pesquisa da pessoa usuária', () => {
  test('Elemento de input deve estar renderizando', () => {
    const { getByTestId } = renderWithRouterAndStore(<SearchBar
      mode="comidas"
      history={ history }
    />);
    const tapInput = getByTestId(SEARCH_INPUT);
    expect(tapInput).toBeInTheDocument();
  });
  test('Elemento radio btn de ingrediente deve estar renderizando', () => {
    const { getByTestId } = renderWithRouterAndStore(<SearchBar
      mode="comidas"
      history={ history }
    />);
    const radioBtnIngredient = getByTestId(INGREDIENT_SEARCH_RADIO);
    expect(radioBtnIngredient).toBeInTheDocument();
  });
  test('Elemento de input do nome deve ser renderizado', () => {
    const { getByTestId } = renderWithRouterAndStore(<SearchBar
      mode="comidas"
      history={ history }
    />);
    const radioBtnName = getByTestId(NAME_SEARCH_RADIO);
    expect(radioBtnName).toBeInTheDocument();
  });
  test('Elemento de busca por primeira letra deve ser renderizado', () => {
    const { getByTestId } = renderWithRouterAndStore(<SearchBar
      mode="comidas"
      history={ history }
    />);
    const radioBtnFirstLetter = getByTestId(FIRST_LETTER_SEARCH_RADIO);
    expect(radioBtnFirstLetter).toBeInTheDocument();
  });
  test('Botão de busca deve ser renderizado e a lógica deve funcionar', () => {
    const { getByTestId } = renderWithRouterAndStore(<SearchBar
      mode="comidas"
      history={ history }
    />);
    const btnSearch = getByTestId(EXECT_SEARCH_BTN);
    expect(btnSearch).toBeInTheDocument();
  });
});

describe('Lógica do fetch do botão search', () => {
  beforeEach(() => {
    window.alert.mockClear();
  });
  test('Com o modo comidas. Busca por ingrediente.', () => {
    const { getByTestId } = renderWithRouterAndStore(<SearchBar
      mode="comidas"
      history={ history }
    />);
    const tapInput = getByTestId(SEARCH_INPUT);
    const radioBtnIngredient = getByTestId(INGREDIENT_SEARCH_RADIO);
    const btnSearch = getByTestId(EXECT_SEARCH_BTN);

    fireEvent.change(tapInput, { target: { value: 'butter' } });
    expect(tapInput).toHaveValue('butter');
    fireEvent.click(radioBtnIngredient);
    expect(radioBtnIngredient.checked).toEqual(true);

    fireEvent.click(btnSearch);
    expect(actions.foodRecipesByIngredient).toHaveBeenCalledTimes(1);
    expect(actions.foodRecipesByIngredient.mock.calls[0][0]).toBe('butter');
  });

  test('Com o modo comidas. Busca por nome.', () => {
    const { getByTestId } = renderWithRouterAndStore(<SearchBar
      mode="comidas"
      history={ history }
    />);
    const tapInput = getByTestId(SEARCH_INPUT);
    const radioBtnIngredient = getByTestId(NAME_SEARCH_RADIO);
    const btnSearch = getByTestId(EXECT_SEARCH_BTN);

    fireEvent.change(tapInput, { target: { value: 'noodle' } });
    expect(tapInput).toHaveValue('noodle');
    fireEvent.click(radioBtnIngredient);
    expect(radioBtnIngredient.checked).toEqual(true);

    fireEvent.click(btnSearch);
    expect(actions.foodRecipesByName).toHaveBeenCalledTimes(1);
    expect(actions.foodRecipesByName.mock.calls[0][0]).toBe('noodle');
  });

  test('Com o modo comidas. Busca por primeira letra.', () => {
    const { getByTestId } = renderWithRouterAndStore(<SearchBar
      mode="comidas"
      history={ history }
    />);
    const tapInput = getByTestId(SEARCH_INPUT);
    const radioBtnIngredient = getByTestId(FIRST_LETTER_SEARCH_RADIO);
    const btnSearch = getByTestId(EXECT_SEARCH_BTN);

    fireEvent.change(tapInput, { target: { value: 'a' } });
    expect(tapInput).toHaveValue('a');
    fireEvent.click(radioBtnIngredient);
    expect(radioBtnIngredient.checked).toEqual(true);

    fireEvent.click(btnSearch);
    expect(actions.foodRecipesByLetter).toHaveBeenCalledTimes(1);
    expect(actions.foodRecipesByLetter.mock.calls[0][0]).toBe('a');
  });

  test('Com o modo comidas. Busca por primeira letra com alerta.', () => {
    const { getByTestId } = renderWithRouterAndStore(<SearchBar
      mode="comidas"
      history={ history }
    />);
    const tapInput = getByTestId(SEARCH_INPUT);
    const radioBtnIngredient = getByTestId(FIRST_LETTER_SEARCH_RADIO);
    const btnSearch = getByTestId(EXECT_SEARCH_BTN);

    fireEvent.change(tapInput, { target: { value: 'ab' } });
    expect(tapInput).toHaveValue('ab');
    fireEvent.click(radioBtnIngredient);
    expect(radioBtnIngredient.checked).toEqual(true);

    fireEvent.click(btnSearch);
    expect(window.alert).toHaveBeenCalledTimes(1);
  });

  test('Com o modo bebidas. Busca por ingrediente.', () => {
    const { getByTestId } = renderWithRouterAndStore(<SearchBar
      mode="bebidas"
      history={ history }
    />);
    const tapInput = getByTestId(SEARCH_INPUT);
    const radioBtnIngredient = getByTestId(INGREDIENT_SEARCH_RADIO);
    const btnSearch = getByTestId(EXECT_SEARCH_BTN);

    fireEvent.change(tapInput, { target: { value: 'orange' } });
    expect(tapInput).toHaveValue('orange');
    fireEvent.click(radioBtnIngredient);
    expect(radioBtnIngredient.checked).toEqual(true);

    fireEvent.click(btnSearch);
    expect(actions.drinkRecipesByIngredient).toHaveBeenCalledTimes(1);
    expect(actions.drinkRecipesByIngredient.mock.calls[0][0]).toBe('orange');
  });

  test('Com o modo bebidas. Busca por nome.', () => {
    const { getByTestId } = renderWithRouterAndStore(<SearchBar
      mode="bebidas"
      history={ history }
    />);
    const tapInput = getByTestId(SEARCH_INPUT);
    const radioBtnIngredient = getByTestId(NAME_SEARCH_RADIO);
    const btnSearch = getByTestId(EXECT_SEARCH_BTN);

    fireEvent.change(tapInput, { target: { value: 'moscow' } });
    expect(tapInput).toHaveValue('moscow');
    fireEvent.click(radioBtnIngredient);
    expect(radioBtnIngredient.checked).toEqual(true);

    fireEvent.click(btnSearch);
    expect(actions.drinkRecipesByName).toHaveBeenCalledTimes(1);
    expect(actions.drinkRecipesByName.mock.calls[0][0]).toBe('moscow');
  });

  test('Com o modo bebidas. Busca por primeira letra.', () => {
    const { getByTestId } = renderWithRouterAndStore(<SearchBar
      mode="bebidas"
      history={ history }
    />);
    const tapInput = getByTestId(SEARCH_INPUT);
    const radioBtnIngredient = getByTestId(FIRST_LETTER_SEARCH_RADIO);
    const btnSearch = getByTestId(EXECT_SEARCH_BTN);

    fireEvent.change(tapInput, { target: { value: 'a' } });
    expect(tapInput).toHaveValue('a');
    fireEvent.click(radioBtnIngredient);
    expect(radioBtnIngredient.checked).toEqual(true);

    fireEvent.click(btnSearch);
    expect(actions.drinkRecipesByLetter).toHaveBeenCalledTimes(1);
    expect(actions.drinkRecipesByLetter.mock.calls[0][0]).toBe('a');
  });

  test('Com o modo bebidas. Busca por primeira letra com alerta.', () => {
    const { getByTestId } = renderWithRouterAndStore(<SearchBar
      mode="bebidas"
      history={ history }
    />);
    const tapInput = getByTestId(SEARCH_INPUT);
    const radioBtnIngredient = getByTestId(FIRST_LETTER_SEARCH_RADIO);
    const btnSearch = getByTestId(EXECT_SEARCH_BTN);

    fireEvent.change(tapInput, { target: { value: 'ab' } });
    expect(tapInput).toHaveValue('ab');
    fireEvent.click(radioBtnIngredient);
    expect(radioBtnIngredient.checked).toEqual(true);

    fireEvent.click(btnSearch);
    expect(window.alert).toHaveBeenCalledTimes(1);
  });
});
