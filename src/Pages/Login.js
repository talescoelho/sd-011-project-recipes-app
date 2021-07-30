import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkEmailAndPass = (e, p) => {
    const validEmail = /^[a-zA-Z]+@[a-zA-Z]+\.[com]{3,}$/i;
    const passLength = 7;
    return validEmail.test(e) && p.length >= passLength;
  };

  const setLocalStorage = (emailUser) => {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email: emailUser }));
  };

  return (
    <div>
      <label htmlFor="email-input">
        Email:
        <input
          type="email"
          data-testid="email-input"
          id="email-input"
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>

      <label htmlFor="password-input">
        Senha:
        <input
          type="password"
          data-testid="password-input"
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <Link to="/comidas">
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ email && password ? !(checkEmailAndPass(email, password)) : true }
          onClick={ () => setLocalStorage(email) }
        >
          Entrar
        </button>
      </Link>
    </div>
  );
}

export default Login;
