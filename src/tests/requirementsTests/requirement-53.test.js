import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import App from '../../App';

describe(`53 - Redirect the user after clicking the "Finish recipe" button to the 
recipes made page, whose route should be /recipes-made`, () => {
  it('Redirects after completing a food recipe',
    () => {
      renderWithRouterAndStore(<App />, { route: '/comidas/52977/in-progress' });
    });

  it('Redirects after completing a drink recipe',
    () => {
      renderWithRouterAndStore(<App />, { route: '/bebidas/15997/in-progress' });
    });
});
