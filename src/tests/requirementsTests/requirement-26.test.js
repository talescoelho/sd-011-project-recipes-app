import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { testMealsRecipeCard, testDrinksRecipeCard } from '../helper/testRecipeCard';
import Foods from '../../pages/Foods';
import Drinks from '../../pages/Drinks';
import mealsFiltersByAll from '../mocks/meals/mockFilterMealsByAll';
import drinksFiltersByAll from '../mocks/drinks/mockFilterDrinksByAll';

const maxDefaultCards = 12;
const cardTestId = '-recipe-card';
const titleTestId = '-card-name';

afterEach(() => jest.clearAllMocks());
beforeEach(() => jest.clearAllMocks());

describe('26 - Load the first 12 food recipes, one on each card',
  () => {
    it('Must load the first 12 food recipes', async () => {
      renderWithRouterAndStore(<Foods />, '/comidas');
      const { meals } = mealsFiltersByAll;
      await testMealsRecipeCard(meals, maxDefaultCards, cardTestId, titleTestId);

      expect(screen.queryByTestId('12-recipe-card')).toBeNull();
      expect(screen.queryByTestId('12-recipe-img')).toBeNull();
      expect(screen.queryByTestId('12-recipe-name')).toBeNull();
    });

    it('Must load the first 12 drink recipes', async () => {
      renderWithRouterAndStore(<Drinks />, '/bebidas');
      const { drinks } = drinksFiltersByAll;
      await testDrinksRecipeCard(drinks, maxDefaultCards, cardTestId, titleTestId);

      expect(screen.queryByTestId('12-recipe-card')).toBeNull();
      expect(screen.queryByTestId('12-recipe-img')).toBeNull();
      expect(screen.queryByTestId('12-recipe-name')).toBeNull();
    });
  });
