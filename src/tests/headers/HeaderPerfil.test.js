import React from 'react';
import { fireEvent } from '@testing-library/dom';
import HeaderPerfil from '../../Components/headers/HeaderPerfil';
import renderWithRouter from '../renderWithRouter';

describe('Testando o header da page /perfil', () => {
  it('O título da page está correto?', () => {
    const { getByText } = renderWithRouter(<HeaderPerfil />);
    const title = getByText('Perfil');
    expect(title).toBeInTheDocument();
  });

  it('O header contém um botão?', () => {
    const { getAllByRole } = renderWithRouter(<HeaderPerfil />);
    const buttons = getAllByRole(/button/);
    const nButtons = buttons.length;
    expect(nButtons).toBe(Number(1));
  });

  it('O botão user redireciona o usuário?', () => {
    const { getByTestId, history } = renderWithRouter(<HeaderPerfil />);
    const userButton = getByTestId('profile-top-btn');
    expect(userButton).toBeInTheDocument();
    fireEvent.click(userButton);
    const url = history.location.pathname;
    expect(url).toBe('/perfil');
  });
});
