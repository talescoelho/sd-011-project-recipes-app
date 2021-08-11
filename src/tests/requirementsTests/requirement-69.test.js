import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import { Search } from '../../pages';

describe(`69 - Redirect the user person by clicking one of the buttons, the route should
change to the explore food or explore drinks page`, () => {
  it('Button names should be "Explorar Comidas" and "Explorar Bebidas"', async () => {
    const { history } = renderWithRouterAndStore(<Search />, 'explorar');

    const exploreFood = await screen.findByTestId('explore-food');
    fireEvent.click(exploreFood);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/explorar/comidas');
  });

  it('Button names should be "Explorar Comidas" and "Explorar Bebidas"', async () => {
    const { history } = renderWithRouterAndStore(<Search />, 'explorar');

    const exploreDrinks = await screen.findByTestId('explore-drinks');
    fireEvent.click(exploreDrinks);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/explorar/bebidas');
  });
});
