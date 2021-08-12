import React from 'react';
import renderWithRouterAndContext from './renderWithRouterAndContext';
import Foods from '../pages/foods/Foods';

describe('Testa a tela <Foods.js />', () => {
  it('A tela de comida possui todos os atributos data-testid', () => {
    const { getByText, getByTestId } = renderWithRouterAndContext(<Foods />);
    expect(getByText(/Explorar Comidas/).toBeInTheDocument());
    expect(getByTestId('0-recipe-card')).toBeInTheDocument();
    // cy.get('[data-testid="recipe-photo"]');
    // cy.get('[data-testid="recipe-title"]');
    // cy.get('[data-testid="share-btn"]');
    // cy.get('[data-testid="favorite-btn"]');
    // cy.get('[data-testid="recipe-category"]');
    // cy.get('[data-testid="0-ingredient-name-and-measure"]');
    // cy.get('[data-testid="instructions"]');
    // cy.get('[data-testid="video"]');
    // cy.get('[data-testid="0-recomendation-card"]');
    // cy.get('[data-testid="start-recipe-btn"]');
  });
});
// describe('Testa componente <Login.js />', () => {
//   it('O botão deve estar ativado se o email e a senha forem válidos', () => {
//     const { getByTestId, history } = renderWithRouter(<Login />);
//     const inputEmail = getByTestId('email-input');
//     const inputPassword = getByTestId('password-input');
//     const buttonLogin = getByTestId('login-submit-btn');

//     expect(buttonLogin).toHaveAttribute('disabled');
//     fireEvent.change(inputEmail, { target: { value: 'alguem@algo.com' } });
//     expect(inputEmail.value).toBe('alguem@algo.com');
//     fireEvent.change(inputPassword, { target: { value: '1234567' } });
//     expect(inputPassword.value).toBe('1234567');
//     fireEvent.click(buttonLogin);
//     expect(history.location.pathname).toBe('/comidas');
//   });
// });
