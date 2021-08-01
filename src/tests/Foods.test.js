import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndStore } from './helper/testConfig';
import {
  mealsResponse,
  mockMealsMenu,
  mealsFiltersResponse,
} from './mocks/mockMealsData';
import Foods from '../pages/Foods';

import * as requestMenu from '../services/requestMenu';

afterEach(() => jest.clearAllMocks());

describe('25- Implemente os cards da tela principal respeitando os atributos:', () => {
  it('A tela tem os 12 data-testids das comidas', async () => {
    const searchMealByName = Promise.resolve(mealsResponse);

    const mockedSearchMealByName = jest
      .spyOn(requestMenu, 'searchMealByName')
      .mockImplementation(() => searchMealByName);

    const requestAllMealCategories = Promise.resolve(mealsFiltersResponse);

    const mockedRequestAllMealCategories = jest
      .spyOn(requestMenu, 'requestAllMealCategories')
      .mockImplementation(() => requestAllMealCategories);

    renderWithRouterAndStore(<Foods />, '/comidas', mockMealsMenu);

    const maxFoodCards = 12;

    const firstFoodCard = await screen.findByTestId('0-recipe-card');
    const firstFoodCardImg = await screen.findByTestId('0-card-img');
    const firstFoodCardName = await screen.findByTestId('0-card-name');

    expect(firstFoodCard).toBeInTheDocument();
    expect(firstFoodCard).toHaveAttribute('href', '/comidas/52977');
    expect(firstFoodCardImg).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg');
    expect(firstFoodCardName).toHaveTextContent('Corba');

    const secondFoodCard = await screen.findByTestId('1-recipe-card');
    const secondFoodCardImg = await screen.findByTestId('1-card-img');
    const secondFoodCardName = await screen.findByTestId('1-card-name');

    expect(secondFoodCard).toBeInTheDocument();
    expect(secondFoodCard).toHaveAttribute('href', '/comidas/52978');
    expect(secondFoodCardImg).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg');
    expect(secondFoodCardName).toHaveTextContent('Kumpir');

    const thirdFoodCard = await screen.findByTestId('2-recipe-card');
    const thirdFoodCardImg = await screen.findByTestId('2-card-img');
    const thirdFoodCardName = await screen.findByTestId('2-card-name');

    expect(thirdFoodCard).toBeInTheDocument();
    expect(thirdFoodCard).toHaveAttribute('href', '/comidas/53026');
    expect(thirdFoodCardImg).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg');
    expect(thirdFoodCardName).toHaveTextContent('Tamiya');

    const fourthFoodCard = await screen.findByTestId('3-recipe-card');
    const fourthFoodCardImg = await screen.findByTestId('3-card-img');
    const fourthFoodCardName = await screen.findByTestId('3-card-name');

    expect(fourthFoodCard).toBeInTheDocument();
    expect(fourthFoodCard).toHaveAttribute('href', '/comidas/52785');
    expect(fourthFoodCardImg).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg');
    expect(fourthFoodCardName).toHaveTextContent('Dal fry');

    const fifthFoodCard = await screen.findByTestId('4-recipe-card');
    const fifthFoodCardImg = await screen.findByTestId('4-card-img');
    const fifthFoodCardName = await screen.findByTestId('4-card-name');

    expect(fifthFoodCard).toBeInTheDocument();
    expect(fifthFoodCard).toHaveAttribute('href', '/comidas/52804');
    expect(fifthFoodCardImg).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg');
    expect(fifthFoodCardName).toHaveTextContent('Poutine');

    const sixthFoodCard = await screen.findByTestId('5-recipe-card');
    const sixthFoodCardImg = await screen.findByTestId('5-card-img');
    const sixthFoodCardName = await screen.findByTestId('5-card-name');

    expect(sixthFoodCard).toBeInTheDocument();
    expect(sixthFoodCard).toHaveAttribute('href', '/comidas/52844');
    expect(sixthFoodCardImg).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg');
    expect(sixthFoodCardName).toHaveTextContent('Lasagne');

    const seventhFoodCard = await screen.findByTestId('6-recipe-card');
    const seventhFoodCardImg = await screen.findByTestId('6-card-img');
    const seventhFoodCardName = await screen.findByTestId('6-card-name');

    expect(seventhFoodCard).toBeInTheDocument();
    expect(seventhFoodCard).toHaveAttribute('href', '/comidas/52929');
    expect(seventhFoodCardImg).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg');
    expect(seventhFoodCardName).toHaveTextContent('Timbits');

    const eighthFoodCard = await screen.findByTestId('7-recipe-card');
    const eighthFoodCardImg = await screen.findByTestId('7-card-img');
    const eighthFoodCardName = await screen.findByTestId('7-card-name');

    expect(eighthFoodCard).toBeInTheDocument();
    expect(eighthFoodCard).toHaveAttribute('href', '/comidas/52948');
    expect(eighthFoodCardImg).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/1525876468.jpg');
    expect(eighthFoodCardName).toHaveTextContent('Wontons');

    const ninthFoodCard = await screen.findByTestId('8-recipe-card');
    const ninthFoodCardImg = await screen.findByTestId('8-card-img');
    const ninthFoodCardName = await screen.findByTestId('8-card-name');

    expect(ninthFoodCard).toBeInTheDocument();
    expect(ninthFoodCard).toHaveAttribute('href', '/comidas/52971');
    expect(ninthFoodCardImg).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg');
    expect(ninthFoodCardName).toHaveTextContent('Kafteji');

    const tenthFoodCard = await screen.findByTestId('9-recipe-card');
    const tenthFoodCardImg = await screen.findByTestId('9-card-img');
    const tenthFoodCardName = await screen.findByTestId('9-card-name');

    expect(tenthFoodCard).toBeInTheDocument();
    expect(tenthFoodCard).toHaveAttribute('href', '/comidas/53013');
    expect(tenthFoodCardImg).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg');
    expect(tenthFoodCardName).toHaveTextContent('Big Mac');

    const eleventhFoodCard = await screen.findByTestId('10-recipe-card');
    const eleventhFoodCardImg = await screen.findByTestId('10-card-img');
    const eleventhFoodCardName = await screen.findByTestId('10-card-name');

    expect(eleventhFoodCard).toBeInTheDocument();
    expect(eleventhFoodCard).toHaveAttribute('href', '/comidas/53027');
    expect(eleventhFoodCardImg).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/4er7mj1598733193.jpg');
    expect(eleventhFoodCardName).toHaveTextContent('Koshari');

    const twelfthFoodCard = await screen.findByTestId('11-recipe-card');
    const twelfthFoodCardImg = await screen.findByTestId('11-card-img');
    const twelfthFoodCardName = await screen.findByTestId('11-card-name');

    expect(twelfthFoodCard).toBeInTheDocument();
    expect(twelfthFoodCard).toHaveAttribute('href', '/comidas/52769');
    expect(twelfthFoodCardImg).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg');
    expect(twelfthFoodCardName).toHaveTextContent('Kapsalon');

    const cards = screen.getAllByRole('link', { name: /card-menu/i });

    expect(cards.length).toBe(maxFoodCards);
    expect(cards.length).not.toBe(maxFoodCards > maxFoodCards + 1);
    expect(mockedSearchMealByName).toBeCalled();
    expect(mockedSearchMealByName).toBeCalledTimes(2);
    expect(mockedRequestAllMealCategories).toBeCalled();
    expect(mockedRequestAllMealCategories).toBeCalledTimes(1);
  });
});
