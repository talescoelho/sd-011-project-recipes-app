import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { FoodRecipeProgress, DrinkRecipeProgress } from '../../pages';

const foodInProgressPathName = '/comidas/:id/in-progress';
const drinkInProgressPathName = '/bebidas/:id/in-progress';

describe(`51 - Develop favorite and share logic, recipe detail screen logic applies 
here`, () => {
  it('Checks if the buttons are available on a food\'s details screen',
    () => {
      renderWithRouterAndStore(<FoodRecipeProgress />, foodInProgressPathName);
    });

  it(`Check the message "Link copiado!" and if the food recipe link was copied to the 
  clipboard`,
  () => {
    renderWithRouterAndStore(<FoodRecipeProgress />, foodInProgressPathName);
  });

  it('Check favorite food',
    () => {
      renderWithRouterAndStore(<FoodRecipeProgress />, foodInProgressPathName);
    });

  it('Check non-favorite food',
    () => {
      renderWithRouterAndStore(<FoodRecipeProgress />, foodInProgressPathName);
    });

  it('Favorite food',
    () => {
      renderWithRouterAndStore(<FoodRecipeProgress />, foodInProgressPathName);
    });

  it('Disfavor food',
    () => {
      renderWithRouterAndStore(<FoodRecipeProgress />, foodInProgressPathName);
    });

  it('Favorite food recipe',
    () => {
      renderWithRouterAndStore(<FoodRecipeProgress />, foodInProgressPathName);
    });

  it('Checks if buttons are available on a drink\'s details screen',
    () => {
      renderWithRouterAndStore(<DrinkRecipeProgress />, drinkInProgressPathName);
    });

  it(`Check the message "Link copied!" and if the drink recipe link was copied to the 
  clipboard`,
  () => {
    renderWithRouterAndStore(<DrinkRecipeProgress />, drinkInProgressPathName);
  });

  it('Check favorite drink',
    () => {
      renderWithRouterAndStore(<DrinkRecipeProgress />, drinkInProgressPathName);
    });

  it('Check non-favorite drink',
    () => {
      renderWithRouterAndStore(<DrinkRecipeProgress />, drinkInProgressPathName);
    });

  it('Favorite drink',
    () => {
      renderWithRouterAndStore(<DrinkRecipeProgress />, drinkInProgressPathName);
    });

  it('Disfavor drink',
    () => {
      renderWithRouterAndStore(<DrinkRecipeProgress />, drinkInProgressPathName);
    });

  it('Favorite drink recipe',
    () => {
      renderWithRouterAndStore(<DrinkRecipeProgress />, drinkInProgressPathName);
    });
});
