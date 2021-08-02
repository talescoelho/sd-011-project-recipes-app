import React from 'react';
import { fireEvent } from '@testing-library/dom';
import HeaderExplore from '../../Components/headers/HeaderExplore';
import renderWithRouter from '../renderWithRouter';

describe('Testando o header da page /explorar', () => {
  it('O título da page está correto?', () => {
    const { getByText } = renderWithRouter(<HeaderExplore />);
    const title = getByText('Explorar');
    expect(title).toBeInTheDocument();
  });

  it('O header contém um botão?', () => {
    const { getAllByRole } = renderWithRouter(<HeaderExplore />);
    const buttons = getAllByRole(/button/);
    const nButtons = buttons.length;
    expect(nButtons).toBe(Number(1));
  });

  it('O botão user redireciona o usuário?', () => {
    const { getByTestId, history } = renderWithRouter(<HeaderExplore />);
    const userButton = getByTestId('profile-top-btn');
    expect(userButton).toBeInTheDocument();
    fireEvent.click(userButton);
    const url = history.location.pathname;
    expect(url).toBe('/perfil');
  });
});
