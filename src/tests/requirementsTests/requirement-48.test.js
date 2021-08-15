import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import * as requestMenu from '../../services/requestMenu';
import mealRecipeDetails from '../mocks/meals/mockMealRecipeDetails';
import drinkRecipeDetails from '../mocks/drinks/mockDrinkRecipeDetails';
import App from '../../App';

jest
  .spyOn(requestMenu, 'mealsRecipeDetails')
  .mockImplementation(() => Promise.resolve(mealRecipeDetails));

jest
  .spyOn(requestMenu, 'drinksRecipeDetails')
  .mockImplementation(() => Promise.resolve(drinkRecipeDetails));

describe('48 - Develop a checkbox for each item on the ingredient list', () => {
  it('All ingredients of a food recipe have a checkbox',
    async () => {
      renderWithRouterAndStore(<App />, { route: '/comidas/52977/in-progress' });

      expect(await screen.findByTestId('0-ingredient-step')).not.toBeChecked();
      expect(await screen.findByTestId('1-ingredient-step')).not.toBeChecked();
      expect(await screen.findByTestId('2-ingredient-step')).not.toBeChecked();
      expect(await screen.findByTestId('3-ingredient-step')).not.toBeChecked();
      expect(await screen.findByTestId('4-ingredient-step')).not.toBeChecked();
      expect(await screen.findByTestId('5-ingredient-step')).not.toBeChecked();
      expect(await screen.findByTestId('6-ingredient-step')).not.toBeChecked();
      expect(await screen.findByTestId('7-ingredient-step')).not.toBeChecked();
      expect(await screen.findByTestId('8-ingredient-step')).not.toBeChecked();
      expect(await screen.findByTestId('9-ingredient-step')).not.toBeChecked();
      expect(await screen.findByTestId('10-ingredient-step')).not.toBeChecked();
      expect(await screen.findByTestId('11-ingredient-step')).not.toBeChecked();
      expect(await screen.findByTestId('12-ingredient-step')).not.toBeChecked();

      expect(screen.queryByTestId('13-ingredient-step')).toBeNull();
    });

  it('All ingredients of a drink recipe have a checkbox',
    async () => {
      renderWithRouterAndStore(<App />, { route: '/bebidas/15997/in-progress' });

      expect(await screen.findByTestId('0-ingredient-step')).not.toBeChecked();
      expect(await screen.findByTestId('1-ingredient-step')).not.toBeChecked();
      expect(await screen.findByTestId('2-ingredient-step')).not.toBeChecked();

      expect(screen.queryByTestId('3-ingredient-step')).toBeNull();
    });
});
