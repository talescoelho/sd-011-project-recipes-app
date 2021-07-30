import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

export default function Login() {
  const { loginState, setLogin } = useContext(RecipesContext);
  const history = useHistory();

  function handleLogin({ target: { type, value } }) {
    setLogin({ ...loginState, [type]: value });
    const { password, email } = loginState;
    const SIX_PASS = 6;
    const verifyEmail = email.includes('@') && email.includes('.com');
    const verifyPassword = password.length >= SIX_PASS;
    if (verifyEmail && verifyPassword) {
      return setLogin({ ...loginState, isDisabled: false });
    }
  }

  function handleSubmit() {
    const { email } = loginState;
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
        disabled={ loginState.isDisabled }
        onClick={ handleSubmit }
      >
        Login
      </button>
    </div>
  );
}
