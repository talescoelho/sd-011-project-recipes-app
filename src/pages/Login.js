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
    <section className="form-login-container">
      <form className="form-login">
        <h2>Login</h2>
        {shouldRedirect ? <Redirect to="/comidas" /> : null}
        <input
          className="input-field-login"
          data-testid="email-input"
          placeholder="Email"
          type="email"
          name="email"
          onKeyUp={ handleChange }
        />
        <input
          className="input-field-login"
          data-testid="password-input"
          placeholder="Password"
          type="password"
          name="password"
          minLength="6"
          onKeyUp={ handleChange }
        />
        <button
          className="button-login "
          type="button"
          data-testid="login-submit-btn"
          disabled={ !disabled }
          onClick={ logInBtn }
        >
          Entrar
        </button>
      </form>
    </section>

  );
}

export default Login;
