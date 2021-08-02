import React from 'react';
import { fireEvent } from '@testing-library/dom';
import HeaderRecipesDone from '../../Components/headers/HeaderRecipesDone';
import renderWithRouter from '../renderWithRouter';

describe('Testando o header da page /receitas-feitas', () => {
  it('O título da page está correto?', () => {
    const { getByText } = renderWithRouter(<HeaderRecipesDone />);
    const title = getByText('Receitas Feitas');
    expect(title).toBeInTheDocument();
  });

  it('O header contém um botão?', () => {
    const { getAllByRole } = renderWithRouter(<HeaderRecipesDone />);
    const buttons = getAllByRole(/button/);
    const nButtons = buttons.length;
    expect(nButtons).toBe(Number(1));
  });

  it('O botão user redireciona o usuário?', () => {
    const { getByTestId, history } = renderWithRouter(<HeaderRecipesDone />);
    const userButton = getByTestId('profile-top-btn');
    expect(userButton).toBeInTheDocument();
    fireEvent.click(userButton);
    const url = history.location.pathname;
    expect(url).toBe('/perfil');
  });
});
