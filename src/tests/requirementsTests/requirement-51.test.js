import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import App from '../../App';

const foodInProgressPathName = { route: '/comidas/52977/in-progress' };
const drinkInProgressPathName = { route: '/bebidas/15997/in-progress' };

describe(`51 - Develop favorite and share logic, recipe detail screen logic applies 
here`, () => {
  it('Checks if the buttons are available on a food\'s details screen',
    () => {
      renderWithRouterAndStore(<App />, foodInProgressPathName);
    });

  it(`Check the message "Link copiado!" and if the food recipe link was copied to the 
  clipboard`,
  () => {
    renderWithRouterAndStore(<App />, foodInProgressPathName);
  });

  it('Check favorite food',
    () => {
      renderWithRouterAndStore(<App />, foodInProgressPathName);
    });

  it('Check non-favorite food',
    () => {
      renderWithRouterAndStore(<App />, foodInProgressPathName);
    });

  it('Favorite food',
    () => {
      renderWithRouterAndStore(<App />, foodInProgressPathName);
    });

  it('Disfavor food',
    () => {
      renderWithRouterAndStore(<App />, foodInProgressPathName);
    });

  it('Favorite food recipe',
    () => {
      renderWithRouterAndStore(<App />, foodInProgressPathName);
    });

  it('Checks if buttons are available on a drink\'s details screen',
    () => {
      renderWithRouterAndStore(<App />, drinkInProgressPathName);
    });

  it(`Check the message "Link copied!" and if the drink recipe link was copied to the 
  clipboard`,
  () => {
    renderWithRouterAndStore(<App />, drinkInProgressPathName);
  });

  it('Check favorite drink',
    () => {
      renderWithRouterAndStore(<App />, drinkInProgressPathName);
    });

  it('Check non-favorite drink',
    () => {
      renderWithRouterAndStore(<App />, drinkInProgressPathName);
    });

  it('Favorite drink',
    () => {
      renderWithRouterAndStore(<App />, drinkInProgressPathName);
    });

  it('Disfavor drink',
    () => {
      renderWithRouterAndStore(<App />, drinkInProgressPathName);
    });

  it('Favorite drink recipe',
    () => {
      renderWithRouterAndStore(<App />, drinkInProgressPathName);
    });
});
