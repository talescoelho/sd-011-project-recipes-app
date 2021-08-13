import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import App from '../../App';

describe(`49 - Implement a logic that, when clicking on an ingredient's checkbox, its 
name must be "crossed out" from the list`, () => {
  it('Check if it is possible to mark all steps of the food recipe',
    () => {
      renderWithRouterAndStore(<App />, { route: '/comidas/52977/in-progress' });
    });

  it('Check if it is possible to mark all steps of the drink recipe',
    () => {
      renderWithRouterAndStore(<App />, { route: '/bebidas/15997/in-progress' });
    });
});
