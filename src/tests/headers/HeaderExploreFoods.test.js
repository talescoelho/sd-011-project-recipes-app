import React from 'react';
import { fireEvent } from '@testing-library/dom';
import HeaderExploreFoods from '../../Components/headers/HeaderExploreFoods';
import renderWithRouter from '../renderWithRouter';

describe('Testando o header da page /explorar/comidas', () => {
  it('O título da page está correto?', () => {
    const { getByText } = renderWithRouter(<HeaderExploreFoods />);
    const title = getByText('Explorar Comidas');
    expect(title).toBeInTheDocument();
  });

  it('O header contém um botão?', () => {
    const { getAllByRole } = renderWithRouter(<HeaderExploreFoods />);
    const buttons = getAllByRole(/button/);
    const nButtons = buttons.length;
    expect(nButtons).toBe(Number(1));
  });

  it('O botão user redireciona o usuário?', () => {
    const { getByTestId, history } = renderWithRouter(<HeaderExploreFoods />);
    const userButton = getByTestId('profile-top-btn');
    expect(userButton).toBeInTheDocument();
    fireEvent.click(userButton);
    const url = history.location.pathname;
    expect(url).toBe('/perfil');
  });
});
