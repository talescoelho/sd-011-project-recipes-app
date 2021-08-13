import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Login({ history }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const patterns = {
    email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w@-]{6,20}$/,
  };

  function handleInput({ name, value }) {
    if (name === 'password') setPassword(value);
    if (name === 'email') setEmail(value);
    if (patterns.email.test(email) && patterns.password.test(password)) {
      setIsDisabled(false);
    }
  }

  function handleBtn() {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/comidas');
  }

  function loginWithEnter({ keyCode }) {
    const enterKeyCode = 13;
    if (keyCode === enterKeyCode) {
      handleBtn();
    }
  }

  return (
    <div className="">
      <h1>Login</h1>
      <input
        onChange={ ({ target }) => handleInput(target) }
        type="email"
        placeholder="Email"
        data-testid="email-input"
        name="email"
      />

      <input
        onChange={ ({ target }) => handleInput(target) }
        type="text"
        placeholder="senha"
        data-testid="password-input"
        name="password"
        onKeyUp={ loginWithEnter }
      />

      <input
        onClick={ () => handleBtn() }
        disabled={ isDisabled }
        type="button"
        value="Entrar"
        data-testid="login-submit-btn"
      />
    </div>
  );
}

export default Login;

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
