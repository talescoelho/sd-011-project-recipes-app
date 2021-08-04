import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import fetchMock from 'fetch-mock-jest';
import renderWithRouterAndRedux from '../helpers/renderWithRouterAndRedux';
import mealsMock from './mocks/mealsMock';
import drinksMock from './mocks/drinksMock';
import App from '../App';

const initialRecipesQuantity = 12;
const baseMealDbUrl = 'https://www.themealdb.com/api/json/v1/1';
const baseCocktailDbUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

const login = () => {
  const inputEmail = screen.getByTestId('email-input');
  fireEvent.change(inputEmail, { target: {
    value: 'email@email.com',
  } });
  const inputPassword = screen.getByTestId('password-input');
  fireEvent.change(inputPassword, { target: {
    value: '1234567',
  } });

  const submitButton = screen.getByTestId('login-submit-btn');
  fireEvent.click(submitButton);
};

describe('Main Recipes Page', () => {
  afterEach(() => jest.clearAllMocks());

  describe('Requirement 25', () => {
    it('should have 12 recipe cards on route "/comidas"', async () => {
      fetchMock.getOnce(`${baseMealDbUrl}/search.php?s=`, mealsMock);

      const { store } = renderWithRouterAndRedux(
        <App />,
      );

      login();

      console.log(store.getState());

      await waitFor(() => fetchMock.called().toBe(true));

      for (let index = 0; index < initialRecipesQuantity; index += 1) {
        expect(screen.getByTestId(`${index}-recipe-card`)).toBeInTheDocument();
        expect(screen.getByTestId(`${index}-card-img`)).toBeInTheDocument();
        expect(screen.getByTestId(`${index}-card-name`)).toBeInTheDocument();
      }

      expect(screen.queryByTestId('12-recipe-card')).not.toBeInTheDocument();
      expect(screen.queryByTestId('12-card-img')).not.toBeInTheDocument();
      expect(screen.queryByTestId('12-card-name')).not.toBeInTheDocument();
    });

    // it.skip('should have 12 recipe cards on route "/bebidas"', () => {
    //   fetchMock.getOnce(`${baseDrinkDbUrl}/search.php?s=`, {
    //     drinks: drinksMock,
    //   });

    //   const { history } = renderWithRouterAndRedux(
    //     <App />,
    //   );

    //   history.push('/bebidas');

    //   for (let index = 0; index < initialRecipesQuantity; index += 1) {
    //     expect(screen.getByTestId(`${index}-recipe-card`)).toBeInTheDocument();
    //     expect(screen.getByTestId(`${index}-card-img`)).toBeInTheDocument();
    //     expect(screen.getByTestId(`${index}-card-name`)).toBeInTheDocument();
    //   }

    //   expect(screen.queryByTestId('12-recipe-card')).not.toBeInTheDocument();
    //   expect(screen.queryByTestId('12-card-img')).not.toBeInTheDocument();
    //   expect(screen.queryByTestId('12-card-name')).not.toBeInTheDocument();
    // });
  });

  // describe('Requirement 26', () => {
  //   it.skip('should render first 12 meals recipes if path is "/comidas"', () => {
  //     fetchMock.getOnce(`${baseMealDbUrl}/search.php?s=`, {
  //       meals: mealsMock,
  //     });

  //     renderWithRouterAndRedux(
  //       <App />,
  //     );

  //     for (let index = 0; index < initialRecipesQuantity; index += 1) {
  //       expect(screen.getByTestId(`${index}-recipe-card`)).toBeInTheDocument();
  //       expect(screen.getByTestId(`${index}-card-img`)).toBeInTheDocument();
  //       expect(screen.getByTestId(`${index}-card-name`)).toBeInTheDocument();
  //     }

  //     expect(screen.queryByTestId('12-recipe-card')).not.toBeInTheDocument();
  //     expect(screen.queryByTestId('12-card-img')).not.toBeInTheDocument();
  //     expect(screen.queryByTestId('12-card-name')).not.toBeInTheDocument();
  //   });
  // });
});
