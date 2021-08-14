import React from 'react';
import renderWithRouterAndContext from './renderWithRouterAndContext';
import { SearchBarContext } from '../context/SearchBar';

describe('Testa a tela <Foods.js />', () => {
  it('A tela de comida possui todos os atributos data-testid', () => {
    const providerProps = { teste: 'abc' };
    renderWithRouterAndContext(
      <SearchBarContext.Consumer>
        { (teste) => (
          <span>
            Received:
            {' '}
            {teste}
          </span>)}
      </SearchBarContext.Consumer>,
      { providerProps },
    );
    // expect(getByText(/^Received:/).textContent).toBe('Received: abc');
    // expect(getByTestId('0-recipe-card')).toBeInTheDocument();
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

// import React, { useContext } from 'react';
// import { SearchBarContext } from '../context/SearchBar';

// export default function Teste() {
//   const { teste } = useContext(SearchBarContext);
//   console.log(teste);
//   return (
//     <div>
//       { teste }
//     </div>
//   );
// }
