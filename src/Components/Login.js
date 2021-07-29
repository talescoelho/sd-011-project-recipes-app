import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnDisable, setBtnDisable] = useState(true);

  useEffect(() => {
    function validateLoginEntries() {
      const numberOfCharacters = 6;
      const regex = /\w+@\w+.com(.br)?/;

      if (email !== '' && regex.test(email) && password.length > numberOfCharacters) {
        setBtnDisable(false);
      } else {
        setBtnDisable(true);
      }
    }
    validateLoginEntries();
  }, [email, password]);

  function sendInfoToLocalStorangeAndRedirect() {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);

    const userEmail = {
      email,
    };
    localStorage.setItem('user', JSON.stringify(userEmail));

    const { history } = props;
    history.push('/comidas');
  }

  return (
    <div>
      <label htmlFor="email">
        Email:
        <input
          data-testid="email-input"
          type="email"
          id="email"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          data-testid="password-input"
          type="password"
          id="password"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <button
        disabled={ btnDisable }
        data-testid="login-submit-btn"
        type="button"
        onClick={ sendInfoToLocalStorangeAndRedirect }
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
