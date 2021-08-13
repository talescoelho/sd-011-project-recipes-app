import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import App from '../../App';

describe(`50 - Save the progress status, which should be kept if the person refreshes 
the page or goes back to the same recipe`, () => {
  it('Saves the progress of a food recipe in progress',
    () => {
      renderWithRouterAndStore(<App />, { route: '/comidas/52977/in-progress' });
    });

  it('Saves the progress of a drink recipe in progress',
    () => {
      renderWithRouterAndStore(<App />, { route: '/bebidas/15997/in-progress' });
    });
});
