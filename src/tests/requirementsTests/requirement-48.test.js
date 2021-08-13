import React from 'react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import App from '../../App';

describe('48 - Develop a checkbox for each item on the ingredient list', () => {
  it('All ingredients of a food recipe have a checkbox',
    () => {
      renderWithRouterAndStore(<App />, { route: '/comidas/52977/in-progress' });
    });

  it('All ingredients of a drink recipe have a checkbox',
    () => {
      renderWithRouterAndStore(<App />, { route: '/bebidas/15997/in-progress' });
    });
});
