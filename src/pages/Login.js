import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory();
  const [login, setLogin] = useState({
    email: '',
    password: '',
    isDisabled: true,
  });

  function handleLogin({ target: { type, value } }) {
    setLogin({ ...login, [type]: value });
    const { password, email } = login;
    const SIX_PASS = 6;
    const verifyEmail = email.includes('@') && email.includes('.com');
    const verifyPassword = password.length >= SIX_PASS;
    if (verifyEmail && verifyPassword) {
      return setLogin({ ...login, isDisabled: false });
    }
  }

  function handleSubmit() {
    const { email } = login;
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/comidas');
  }

  return (
    <div>
      <input
        type="email"
        data-testid="email-input"
        placeholder="email"
        onChange={ handleLogin }
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="senha"
        onChange={ handleLogin }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ login.isDisabled }
        onClick={ handleSubmit }
      >
        Login
      </button>
    </div>
  );
}
