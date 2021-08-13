import React from 'react';
import { cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Recipes from '../Pages/Recipes';
import { renderWithRouter } from '../Services/Data';
import mealCategories from '../../cypress/mocks/mealCategories';

describe('Tests the Recipes component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should display the Comidas title on rendering', () => {
    const { getByLabelText, getByText, getByTestId } = renderWithRouter(<Recipes />);

    // const emailInput = getByLabelText(/Email:/i);
    // const passwordInput = getByLabelText(/Senha:/i);
    // const btnNode = getByTestId('login-submit-btn');
    // const mockMail = 'jon@m.com';
    // const mockPass = '102384198';
    // userEvent.type(emailInput, mockMail);
    // userEvent.type(passwordInput, mockPass);
    // userEvent.click(btnNode);
    const linkElement = getByTestId('page-title');
    expect(linkElement).toBeInTheDocument();
    const topSearchBtn = getByTestId('search-top-btn');
    userEvent.click(topSearchBtn);
  });

  it('should click all buttons', async () => {
    const { getByTestId, getByText } = renderWithRouter(<Recipes />);
    // const categoriesBtns = getAllByTestId('button');
    const recipesTitle = getByText(/Receitas/i);
    expect(recipesTitle).toBeInTheDocument();
    // const { meals } = mealCategories;
    // await meals.forEach((el) => {
    //   expect(getByText(`${el.strCategory}`)).toBeInTheDocument();
    // });
    // console.log('cats-btns:', categoriesBtns[0]);
    // categoriesBtns.forEach((el) => userEvent.click(el));
    await waitFor(() => {
      const firstCard = getByTestId('0-recipe-card');
      console.log('this: ', firstCard);
      expect(firstCard).toBeInTheDocument();
      userEvent.click(firstCard);
      // expect(mockedExchange).toBeCalledTimes(2);
    });
  });

  // it('should enable the login button when inputs are typed', () => {
  //   const { getByLabelText, getByTestId } = render(<App />);
  //   const setLocalStorage = jest.fn();
  //   const emailInput = getByLabelText(/Email:/i);
  //   const passwordInput = getByLabelText(/Senha:/i);
  //   const btnNode = getByTestId('login-submit-btn');
  //   expect(btnNode).toBeDisabled();
  //   const mockMail = 'jon@m.com';
  //   const mockPass = '102384198';
  //   userEvent.type(emailInput, mockMail);
  //   userEvent.type(passwordInput, mockPass);
  //   expect(btnNode).not.toBeDisabled();
  //   userEvent.click(btnNode);

  //   // tests 1 line on the header component
  //   const serachBtn = getByTestId('search-top-btn');
  //   userEvent.click(serachBtn);
  // });
});
