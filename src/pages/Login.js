import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(true);

  function ableButton() {
    const numMin = 6;
    const regex = /\w+@\w+.com(.br)?/;
    if (regex.test(email.email) && password.length >= numMin) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }

  function loginInput({ target }) {
    setEmail({ email: target.value });
    ableButton();
  }

  function passwordInput({ target }) {
    setPassword(target.value);
    ableButton();
  }

  function handleClickButtonLogin() {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(email));
  }

  return (
    <div>
      Login
      <input
        type="email"
        placeholder="Email"
        data-testid="email-input"
        onChange={ loginInput }
      />
      <input
        type="password"
        placeholder="Password"
        data-testid="password-input"
        onChange={ passwordInput }
      />
      <Link to="/comidas">
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ status }
          onClick={ handleClickButtonLogin }
        >
          Entrar
        </button>
      </Link>
    </div>
  );
}
