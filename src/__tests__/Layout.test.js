import React from 'react';
import { screen } from '@testing-library/dom';
import render from '../helpers/renderWithRouterAndStore';
import { Layout } from '../components';

describe('O component Layout', () => {
  beforeEach(() => {
    render(<Layout><h1>ola mundo</h1></Layout>);
  });
  it('Muda o titulo da pagina quando não recebe a prop title', () => {
    expect(document.title).toBe('App de Receitas');
  });
  it('Não possui o search', () => {
    const { queryByAltText } = screen;
    expect(queryByAltText('Buscar receitas')).not.toBeInTheDocument();
  });
});

describe('O component Layout, quando recebe a prop title', () => {
  beforeEach(() => {
    render(<Layout title="Hello World!"><h1>ola mundo</h1></Layout>);
  });
  it('Muda o titulo da pagina', () => {
    expect(document.title).toBe('Hello World! | App de Receitas');
  });
});

describe('O component Layout, quando recebe a prop search', () => {
  beforeEach(() => {
    render(<Layout search><h1>ola mundo</h1></Layout>);
  });
  it('Possui o search', () => {
    const { queryByAltText } = screen;
    expect(queryByAltText('Buscar receitas')).toBeInTheDocument();
  });
});

// it('', () => {
//   const { getByTestId } =
//   expect(getByTestId('page-title')).toBeInTheDocument();
//   expect(getByTestId('profile-top-btn')).toBeInTheDocument();
//   expect(getByTestId('search-top-btn')).toBeInTheDocument();
// });
