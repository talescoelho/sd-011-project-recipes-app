import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function handleChange({ target: { name, value } }) {
    setLogin({
      ...login,
      [name]: value,
    });
  }

  useEffect(() => {
    const { email, password } = login;
    const minLength = 6;
    const emailFormat = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;

    if (emailFormat.test(email) && password.length > minLength) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [login]);

  function logInBtn() {
    const { email } = login;
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    setShouldRedirect(true);
  }

  return (
    <div>
      {shouldRedirect ? <Redirect to="/comidas" /> : null}
      <input
        data-testid="email-input"
        placeholder="Email"
        type="email"
        name="email"
        onKeyUp={ handleChange }
      />
      <input
        data-testid="password-input"
        placeholder="Password"
        type="password"
        name="password"
        minLength="6"
        onKeyUp={ handleChange }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ !disabled }
        onClick={ logInBtn }
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
