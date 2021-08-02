import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../Router/renderWithRouter';
import LowerMenu from '../Components/LowerMenu';

describe('deve renderizar os componentes do Footer', () => {
  it('Verifica se o footer foi criado', () => {
    const { getByTestId } = renderWithRouter(<LowerMenu />);
    const footer = getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });

  it('Verifica se o botão que redireciona para o catálogo das bebidas existe', () => {
    const { getByTestId, history } = renderWithRouter(<LowerMenu />);
    const drinksBtn = getByTestId('drinks-bottom-btn');
    expect(drinksBtn).toBeInTheDocument();

    fireEvent.click(drinksBtn);
    const { pathname } = history.location;
    expect(pathname).toBe('/bebidas');
  });

  it('Verifica se o botão que redireciona para o explorar existe', () => {
    const { getByTestId, history } = renderWithRouter(<LowerMenu />);
    const exploreBtn = getByTestId('explore-bottom-btn');
    expect(exploreBtn).toBeInTheDocument();

    fireEvent.click(exploreBtn);
    const { pathname } = history.location;
    expect(pathname).toBe('/explorar');
  });

  it('Verifica se o botão que redireciona para o catálogo de comidas existe', () => {
    const { getByTestId, history } = renderWithRouter(<LowerMenu />);
    const foodBtn = getByTestId('food-bottom-btn');
    expect(foodBtn).toBeInTheDocument();

    fireEvent.click(foodBtn);
    const { pathname } = history.location;
    expect(pathname).toBe('/comidas');
  });
});
