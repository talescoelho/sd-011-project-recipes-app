import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('Testa os elementos da barra de busca', () => {
  it('Verifica se existe uma label e um input para buscar as receitas', () => {
    const { getByLabelText } = render(<App />);
    const inputSearchBar = getByLabelText(/Buscar Receita/i);
    expect(inputSearchBar).toBeInTheDocument();
  });
  it('Verifica se existem radio buttons na tela', () => {
    const three = 3;
    const { getAllByRole } = render(<App />);
    const radioButtons = getAllByRole('radio');
    expect(radioButtons).toBeInTheDocument();
    expect(radioButtons).toHaveLenght(three);
  });
});
