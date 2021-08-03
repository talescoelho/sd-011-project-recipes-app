import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import Foods from '../../pages/Foods';
import Drinks from '../../pages/Drinks';

afterEach(() => jest.clearAllMocks());
beforeEach(() => jest.clearAllMocks());

describe('27 - Implemente os botões de categoria para serem utilizados como filtro',
  () => {
    it(`Caso as receitas sejam de comida, deve-se exibir as 5 primeiras categorias de 
    comida`, async () => {
      renderWithRouterAndStore(<Foods />, '/comidas');

      const beefFilterOption = await screen.findByTestId('Beef-category-filter');
      const breakfastFilterOption = await screen
        .findByTestId('Breakfast-category-filter');
      const chickenFilterOption = await screen.findByTestId('Chicken-category-filter');
      const dessertFilterOption = await screen.findByTestId('Dessert-category-filter');
      const goatFilterOption = await screen.findByTestId('Goat-category-filter');

      expect(beefFilterOption).toBeInTheDocument();
      expect(beefFilterOption).toHaveTextContent('Beef');
      expect(breakfastFilterOption).toBeInTheDocument();
      expect(breakfastFilterOption).toHaveTextContent('Breakfast');
      expect(chickenFilterOption).toBeInTheDocument();
      expect(chickenFilterOption).toHaveTextContent('Chicken');
      expect(dessertFilterOption).toBeInTheDocument();
      expect(dessertFilterOption).toHaveTextContent('Dessert');
      expect(goatFilterOption).toBeInTheDocument();
      expect(goatFilterOption).toHaveTextContent('Goat');

      const filterButtons = await screen.findAllByRole('button', { name: 'filter-btn' });

      const maxFilterButtons = 6;

      expect(filterButtons.length).toBe(maxFilterButtons);
      expect(filterButtons.length).not.toBe(maxFilterButtons + 1);
    });

    it(`Caso as receitas sejam de comida, deve-se exibir as 5 primeiras categorias de 
    comida`, async () => {
      renderWithRouterAndStore(<Drinks />, '/bebidas');

      const ordinaryDrinkFilterOption = await screen
        .findByTestId('Ordinary Drink-category-filter');
      const cocktailFilterOption = await screen
        .findByTestId('Cocktail-category-filter');
      const milkFloatShakeFilterOption = await screen
        .findByTestId('Milk / Float / Shake-category-filter');
      const otherUnknownFilterOption = await screen
        .findByTestId('Other/Unknown-category-filter');
      const cocoaFilterOption = await screen.findByTestId('Cocoa-category-filter');

      expect(ordinaryDrinkFilterOption).toBeInTheDocument();
      expect(ordinaryDrinkFilterOption).toHaveTextContent('Ordinary Drink');
      expect(cocktailFilterOption).toBeInTheDocument();
      expect(cocktailFilterOption).toHaveTextContent('Cocktail');
      expect(milkFloatShakeFilterOption).toBeInTheDocument();
      expect(milkFloatShakeFilterOption).toHaveTextContent('Milk / Float / Shake');
      expect(otherUnknownFilterOption).toBeInTheDocument();
      expect(otherUnknownFilterOption).toHaveTextContent('Other/Unknown');
      expect(cocoaFilterOption).toBeInTheDocument();
      expect(cocoaFilterOption).toHaveTextContent('Cocoa');

      const filterButtons = await screen.findAllByRole('button', { name: 'filter-btn' });

      const maxFilterButtons = 6;

      expect(filterButtons.length).toBe(maxFilterButtons);
      expect(filterButtons.length).not.toBe(maxFilterButtons + 1);
    });
  });
