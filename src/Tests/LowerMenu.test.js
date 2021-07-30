import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../Router/renderWithRouter';
import LowerMenu from '../Components/LowerMenu';

describe('deve renderizar os componentes do Footer', () => {
  const { getByTestId, history } = renderWithRouter(<LowerMenu />);

  const locateFooterElements = {
    footer: getByTestId('footer'),
    drinksBtn: getByTestId('drinks-bottom-btn'),
    exploreBtn: getByTestId('explore-bottom-btn'),
    foodBtn: getByTestId('food-bottom-btn'),
  };
  const { footer, drinksBtn, exploreBtn, foodBtn } = locateFooterElements;

  it('Verifica se o footer foi criado', () => expect(footer).toBeInTheDocument());

  it('Verifica se o botão que redireciona para o catálogo das bebidas existe', () => {
    expect(drinksBtn).toBeInTheDocument();

    fireEvent.click(drinksBtn);
    const { pathname } = history.location;
    expect(pathname).toBe('/bebidas');
  });

  it('Verifica se o botão que redireciona para o explorar existe', () => {
    expect(exploreBtn).toBeInTheDocument();

    fireEvent.click(exploreBtn);
    const { pathname } = history.location;
    expect(pathname).toBe('/explorar');
  });

  it('Verifica se o botão que redireciona para o catálogo de comidas existe', () => {
    expect(foodBtn).toBeInTheDocument();

    fireEvent.click(foodBtn);
    const { pathname } = history.location;
    expect(pathname).toBe('/comidas');
  });
});
