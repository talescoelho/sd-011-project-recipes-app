import React from 'react';
import { Provider } from 'react-redux';
import { cleanup } from '@testing-library/react';
import { createStore, combineReducers } from 'redux';
import App from '../App';
import searchBarReducer from '../redux/reducers/searchBarReducer';
import renderWithRouter from './renderWithRouter';

const renderWithRedux = (
  component,
  { initialState,
    store = createStore(combineReducers({ searchBarReducer }), initialState) } = {},
) => ({
  ...renderWithRouter(<Provider store={ store }>{component}</Provider>),
  store,
});

describe('Testando o componente Header', () => {
  it('Verifica os elementos da Header na tela principal de receitas', async () => {
    const { findByTestId, getByTestId, history } = renderWithRedux(<App />);
    history.push('/comidas');
    let url = history.location.pathname;
    expect(url).toBe('/comidas');

    const profileBtn = getByTestId('profile-top-btn');
    const pageTitle = getByTestId('page-title');

    expect(profileBtn).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();

    const searchBtn = await findByTestId('search-top-btn');
    expect(searchBtn).toBeInTheDocument();

    cleanup();

    history.push('/bebidas');
    url = history.location.pathname;
    expect(url).toBe('/bebidas');

    expect(profileBtn).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  });

  it('Verifica se não possui header na tela de login, de detalhes de comida e outras',
    () => {
      const { queryByTestId, history } = renderWithRedux(<App />);
      const profileBtn = queryByTestId('profile-top-btn');
      const pageTitle = queryByTestId('page-title');

      expect(profileBtn).not.toBeInTheDocument();
      expect(pageTitle).not.toBeInTheDocument();

      history.push('/comidas/52771');
      let url = history.location.pathname;
      expect(url).toBe('/comidas/52771');

      expect(profileBtn).not.toBeInTheDocument();
      expect(pageTitle).not.toBeInTheDocument();

      history.push('/bebidas/178319');
      url = history.location.pathname;
      expect(url).toBe('/bebidas/178319');

      expect(profileBtn).not.toBeInTheDocument();
      expect(pageTitle).not.toBeInTheDocument();
    });
});
