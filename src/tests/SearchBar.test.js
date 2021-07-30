import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

const THREE = 3;

describe('Testa o component SearchBar', () => {
  test('Verifique se existe um input para buscar receitas', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const inputBar = getByPlaceholderText('Buscar Receita');
    expect(inputBar).toBeInTheDocument();
  });

  test('Verifique se existem 3 radio buttons', () => {
    const { getAllByRole } = render(<SearchBar />);
    const radios = getAllByRole('radio');
    expect(radios).toHaveLength(THREE);
  });
});
