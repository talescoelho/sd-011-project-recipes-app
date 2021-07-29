import React from 'react';
import { fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('testa componente Footer', () => {
  it('deve renderizar o componente Footer', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const footerElement = getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });
  it('deve conter os links para drinks, explore e food', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const drinksLink = getByTestId('drinks-bottom-btn');
    const exploreLink = getByTestId('explore-bottom-btn');
    const foodLink = getByTestId('food-bottom-btn');
    expect(drinksLink).toBeInTheDocument();
    expect(exploreLink).toBeInTheDocument();
    expect(foodLink).toBeInTheDocument();
  });
  it('ao clicar em drink direciona para a pagina correta', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const drinksLink = getByTestId('drinks-bottom-btn');
    fireEvent.click(drinksLink);
    expect(window.location.pathname).toBe('/bebidas');
  });
  it('ao clicar em explore direciona para a pagina correta', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const exploreLink = getByTestId('explore-bottom-btn');
    fireEvent.click(exploreLink);
    expect(window.location.pathname).toBe('/explorar');
  });
  it('ao clicar em food direciona para a pagina correta', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const foodLink = getByTestId('food-bottom-btn');
    fireEvent.click(foodLink);
    expect(window.location.pathname).toBe('/comidas');
  });
});
