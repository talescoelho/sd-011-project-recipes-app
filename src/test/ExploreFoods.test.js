import React from 'react';
// import { fireEvent } from '@testing-library/react';
import ExplorarComidas from '../pages/explorar/comidas';
import renderWithRouterAndStore from './testConfig';

describe('Testa a página ExplorarComidas', () => {
  it('Tem o botão Por Ingredientes', () => {
    const { getByTestId } = renderWithRouterAndStore(<ExplorarComidas />);
    const btnByIngredients = getByTestId('explore-by-ingredient');
    expect(btnByIngredients).toBeInTheDocument();
    // fireEvent.click(btnByIngredients);
    // redirecionar para a página...
  });

  it('Tem o botão Me Surpreenda!', () => {
    const { getByTestId } = renderWithRouterAndStore(<ExplorarComidas />);
    const btnSurpriseMe = getByTestId('explore-surprise');
    expect(btnSurpriseMe).toBeInTheDocument();
  });

  it('Tem o botão Por Local de Origem', () => {
    const { getByTestId } = renderWithRouterAndStore(<ExplorarComidas />);
    const btnByArea = getByTestId('explore-by-area');
    expect(btnByArea).toBeInTheDocument();
  });
});
