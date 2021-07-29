import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [redirect, setRedirect] = useState(false);

  function checkData() {
    const validPassword = 6;
    return email.match(/^[A-Za-z0-9._]+@([A-Za-z]+\.)[A-Za-z]{2,3}(\.[A-Za-z]{2})?$/)
      && password.length > validPassword;
  }

  function submit() {
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    setRedirect(true);
  }

  return (
    <div>
      { redirect ? <Redirect to="/comidas" /> : null }
      <form>
        <input
          data-testid="email-input"
          type="email"
          onKeyUp={ (e) => setEmail(e.target.value) }
          placeholder="Insira seu email"
        />
        <input
          data-testid="password-input"
          type="password"
          onKeyUp={ (e) => setPassword(e.target.value) }
          placeholder="Insira sua senha"
        />
        <button
          data-testid="login-submit-btn"
          type="button"
          disabled={ !checkData() }
          onClick={ submit }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
