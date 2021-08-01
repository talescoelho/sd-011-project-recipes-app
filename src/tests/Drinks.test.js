import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndStore } from './helper/testConfig';
import {
  drinksResponse,
  mockDrinksMenu,
  drinksFiltersResponse,
} from './mocks/mockDrinksData';
import Drinks from '../pages/Drinks';

import * as requestMenu from '../services/requestMenu';

afterEach(() => jest.clearAllMocks());

describe('25- Implemente os cards da tela principal respeitando os atributos:', () => {
  it('A tela tem os 12 data-testids das bebidas', async () => {
    const searchDrinkByName = Promise.resolve(drinksResponse);

    const mockedSearchDrinkByName = jest
      .spyOn(requestMenu, 'searchDrinkByName')
      .mockImplementation(() => searchDrinkByName);

    const requestAllDrinksCategories = Promise.resolve(drinksFiltersResponse);

    const mockedRequestAllDrinksCategories = jest
      .spyOn(requestMenu, 'requestAllDrinkCategories')
      .mockImplementation(() => requestAllDrinksCategories);

    renderWithRouterAndStore(<Drinks />, '/bebidas', mockDrinksMenu);

    const maxDrinksCards = 12;

    const firstDrinkCard = await screen.findByTestId('0-recipe-card');
    const firstDrinkCardImg = await screen.findByTestId('0-card-img');
    const firstDrinkCardName = await screen.findByTestId('0-card-name');

    expect(firstDrinkCard).toBeInTheDocument();
    expect(firstDrinkCard).toHaveAttribute('href', '/bebidas/15997');
    expect(firstDrinkCardImg).toHaveAttribute('src', 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg');
    expect(firstDrinkCardName).toHaveTextContent('GG');

    const secondDrinkCard = await screen.findByTestId('1-recipe-card');
    const secondDrinkCardImg = await screen.findByTestId('1-card-img');
    const secondDrinkCardName = await screen.findByTestId('1-card-name');

    expect(secondDrinkCard).toBeInTheDocument();
    expect(secondDrinkCard).toHaveAttribute('href', '/bebidas/17222');
    expect(secondDrinkCardImg).toHaveAttribute('src', 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg');
    expect(secondDrinkCardName).toHaveTextContent('A1');

    const thirdDrinkCard = await screen.findByTestId('2-recipe-card');
    const thirdDrinkCardImg = await screen.findByTestId('2-card-img');
    const thirdDrinkCardName = await screen.findByTestId('2-card-name');

    expect(thirdDrinkCard).toBeInTheDocument();
    expect(thirdDrinkCard).toHaveAttribute('href', '/bebidas/13501');
    expect(thirdDrinkCardImg).toHaveAttribute('src', 'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg');
    expect(thirdDrinkCardName).toHaveTextContent('ABC');

    const fourthDrinkCard = await screen.findByTestId('3-recipe-card');
    const fourthDrinkCardImg = await screen.findByTestId('3-card-img');
    const fourthDrinkCardName = await screen.findByTestId('3-card-name');

    expect(fourthDrinkCard).toBeInTheDocument();
    expect(fourthDrinkCard).toHaveAttribute('href', '/bebidas/17203');
    expect(fourthDrinkCardImg).toHaveAttribute('src', 'https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg');
    expect(fourthDrinkCardName).toHaveTextContent('Kir');

    const fifthDrinkCard = await screen.findByTestId('4-recipe-card');
    const fifthDrinkCardImg = await screen.findByTestId('4-card-img');
    const fifthDrinkCardName = await screen.findByTestId('4-card-name');

    expect(fifthDrinkCard).toBeInTheDocument();
    expect(fifthDrinkCard).toHaveAttribute('href', '/bebidas/14229');
    expect(fifthDrinkCardImg).toHaveAttribute('src', 'https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg');
    expect(fifthDrinkCardName).toHaveTextContent('747');

    const sixthDrinkCard = await screen.findByTestId('5-recipe-card');
    const sixthDrinkCardImg = await screen.findByTestId('5-card-img');
    const sixthDrinkCardName = await screen.findByTestId('5-card-name');

    expect(sixthDrinkCard).toBeInTheDocument();
    expect(sixthDrinkCard).toHaveAttribute('href', '/bebidas/15288');
    expect(sixthDrinkCardImg).toHaveAttribute('src', 'https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg');
    expect(sixthDrinkCardName).toHaveTextContent('252');

    const seventhDrinkCard = await screen.findByTestId('6-recipe-card');
    const seventhDrinkCardImg = await screen.findByTestId('6-card-img');
    const seventhDrinkCardName = await screen.findByTestId('6-card-name');

    expect(seventhDrinkCard).toBeInTheDocument();
    expect(seventhDrinkCard).toHaveAttribute('href', '/bebidas/17225');
    expect(seventhDrinkCardImg).toHaveAttribute('src', 'https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg');
    expect(seventhDrinkCardName).toHaveTextContent('Ace');

    const eighthDrinkCard = await screen.findByTestId('7-recipe-card');
    const eighthDrinkCardImg = await screen.findByTestId('7-card-img');
    const eighthDrinkCardName = await screen.findByTestId('7-card-name');

    expect(eighthDrinkCard).toBeInTheDocument();
    expect(eighthDrinkCard).toHaveAttribute('href', '/bebidas/17837');
    expect(eighthDrinkCardImg).toHaveAttribute('src', 'https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg');
    expect(eighthDrinkCardName).toHaveTextContent('Adam');

    const ninthDrinkCard = await screen.findByTestId('8-recipe-card');
    const ninthDrinkCardImg = await screen.findByTestId('8-card-img');
    const ninthDrinkCardName = await screen.findByTestId('8-card-name');

    expect(ninthDrinkCard).toBeInTheDocument();
    expect(ninthDrinkCard).toHaveAttribute('href', '/bebidas/13332');
    expect(ninthDrinkCardImg).toHaveAttribute('src', 'https://www.thecocktaildb.com/images/media/drink/rwqxrv1461866023.jpg');
    expect(ninthDrinkCardName).toHaveTextContent('B-53');

    const tenthDrinkCard = await screen.findByTestId('9-recipe-card');
    const tenthDrinkCardImg = await screen.findByTestId('9-card-img');
    const tenthDrinkCardName = await screen.findByTestId('9-card-name');

    expect(tenthDrinkCard).toBeInTheDocument();
    expect(tenthDrinkCard).toHaveAttribute('href', '/bebidas/13938');
    expect(tenthDrinkCardImg).toHaveAttribute('src', 'https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg');
    expect(tenthDrinkCardName).toHaveTextContent('AT&T');

    const eleventhDrinkCard = await screen.findByTestId('10-recipe-card');
    const eleventhDrinkCardImg = await screen.findByTestId('10-card-img');
    const eleventhDrinkCardName = await screen.findByTestId('10-card-name');

    expect(eleventhDrinkCard).toBeInTheDocument();
    expect(eleventhDrinkCard).toHaveAttribute('href', '/bebidas/14610');
    expect(eleventhDrinkCardImg).toHaveAttribute('src', 'https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg');
    expect(eleventhDrinkCardName).toHaveTextContent('ACID');

    const twelfthDrinkCard = await screen.findByTestId('11-recipe-card');
    const twelfthDrinkCardImg = await screen.findByTestId('11-card-img');
    const twelfthDrinkCardName = await screen.findByTestId('11-card-name');

    expect(twelfthDrinkCard).toBeInTheDocument();
    expect(twelfthDrinkCard).toHaveAttribute('href', '/bebidas/15853');
    expect(twelfthDrinkCardImg).toHaveAttribute('src', 'https://www.thecocktaildb.com/images/media/drink/5a3vg61504372070.jpg');
    expect(twelfthDrinkCardName).toHaveTextContent('B-52');

    const cards = await screen.findAllByRole('link');

    expect(cards.length).toBe(maxDrinksCards);
    expect(cards.length).not.toBe(maxDrinksCards > maxDrinksCards + 1);
    expect(mockedSearchDrinkByName).toBeCalled();
    expect(mockedSearchDrinkByName).toBeCalledTimes(1);
    expect(mockedRequestAllDrinksCategories).toBeCalled();
    expect(mockedRequestAllDrinksCategories).toBeCalledTimes(1);
  });
});
