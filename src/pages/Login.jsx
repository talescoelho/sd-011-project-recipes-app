import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import '../styles/Login.css';

export default function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [LoginButtonStatus, setLoginButtonStatus] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const minLength = 6;
    setLoginButtonStatus(true);
    if (regex.test(loginEmail) && loginPassword.length > minLength) {
      setLoginButtonStatus(false);
    }
  }, [loginPassword, loginEmail]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailObject = { email: loginEmail };
    localStorage.setItem('user', JSON.stringify(emailObject));
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      cocktails: {},
      meals: {},
    }));
    history.push('/comidas');
  };

  return (
    <div className="loginContainer">
      <form onSubmit={ (event) => handleSubmit(event) }>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            id="email"
            value={ loginEmail }
            onChange={ ({ target }) => setLoginEmail(target.value) }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            id="password"
            value={ loginPassword }
            onChange={ ({ target }) => setLoginPassword(target.value) }
            data-testid="password-input"
          />
        </label>
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ LoginButtonStatus }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
