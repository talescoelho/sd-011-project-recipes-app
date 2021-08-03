import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { testMealsRecipeCard, testDrinksRecipeCard } from '../helper/testRecipeCard';
import Foods from '../../pages/Foods';
import Drinks from '../../pages/Drinks';
import mealsFiltersByAll from '../mocks/meals/mockFilterMealsByAll';
import drinksFiltersByAll from '../mocks/drinks/mockFilterDrinksByAll';

const maxDefaultCards = 12;

afterEach(() => jest.clearAllMocks());
beforeEach(() => jest.clearAllMocks());

describe('26 - Carregue as 12 primeiras receitas de comidas, uma em cada card',
  () => {
    it('Deve carregar as 12 primeiras receitas de comida', async () => {
      renderWithRouterAndStore(<Foods />, '/comidas');
      const { meals } = mealsFiltersByAll;
      await testMealsRecipeCard(meals, maxDefaultCards);

      expect(screen.queryByTestId('12-recipe-card')).toBeNull();
      expect(screen.queryByTestId('12-recipe-img')).toBeNull();
      expect(screen.queryByTestId('12-recipe-name')).toBeNull();
    });

    it('Deve carregar as 12 primeiras receitas de bebida', async () => {
      renderWithRouterAndStore(<Drinks />, '/bebidas');
      const { drinks } = drinksFiltersByAll;
      await testDrinksRecipeCard(drinks, maxDefaultCards);

      expect(screen.queryByTestId('12-recipe-card')).toBeNull();
      expect(screen.queryByTestId('12-recipe-img')).toBeNull();
      expect(screen.queryByTestId('12-recipe-name')).toBeNull();
    });
  });
