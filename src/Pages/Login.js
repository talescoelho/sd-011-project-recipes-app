import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    function LoginVerification() {
      const validateEmail = /^[\w.]+@[a-z]+\.\w{2,3}$/g;
      const validatePass = /[\S]{7,}/;
      if (validateEmail.test(email) && validatePass.test(password)) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
    LoginVerification();
  }, [email, password]);

  function setToLocalStorage() {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    const setUser = { email };
    const emailStringFly = JSON.stringify(setUser);
    localStorage.setItem('user', emailStringFly);
    // const initialObj = {
    //   cocktails: {},
    //   meals: {},
    // };
  }

  return (
    <div>
      <label htmlFor="email">
        <input
          data-testid="email-input"
          type="text"
          placeholder="Digite seu email"
          name="email"
          value={ email }
          onChange={ (event) => setEmail(event.target.value) }
        />
      </label>
      <label htmlFor="password">
        <input
          data-testid="password-input"
          type="password"
          placeholder="Digite sua senha"
          name="password"
          value={ password }
          onChange={ (event) => setPassword(event.target.value) }
        />
      </label>
      <Link to="/comidas">
        <button
          data-testid="login-submit-btn"
          type="button"
          disabled={ disabled }
          onClick={ setToLocalStorage }
        >
          Entrar
        </button>
      </Link>
    </div>
  );
}
