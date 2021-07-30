import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';

function Login() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [disabled, setDisabled] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  function handleChange({ target: { value, name } }) {
    setLogin({
      ...login,
      [name]: value,
    });
  }

  useEffect(() => {
    const { email, password } = login;
    const minPass = 6;
    const emailValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (emailValid.test(email) && password.length > minPass) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [login]);

  function submitBtn() {
    const { email } = login;
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    setShouldRedirect(true);
  }

  return (
    <main>
      { shouldRedirect ? <Redirect to="/comidas" /> : null }
      <h1>Login</h1>
      <form>
        <input
          type="email"
          data-testid="email-input"
          placeholder="Email"
          name="email"
          onChange={ handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          name="password"
          onChange={ handleChange }
        />
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ disabled }
          onClick={ submitBtn }
        >
          Entrar
        </button>
      </form>
    </main>
  );
}

export default Login;
