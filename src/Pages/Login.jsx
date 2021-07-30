import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import credentialsVerify from '../Helpers/credentialsVerify';
import submitLocalStorage from '../Helpers/submitLocalStorage';

function Login() {
  const [user, setUser] = useState({ email: '', password: '' });
  const [disabled, setDisabled] = useState(true);

  function handleSubmit(e) {
    setUser({
      ...user, [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    setDisabled(credentialsVerify(user.email, user.password));
  }, [user]);

  return (
    <div>
      <h1>Login</h1>
      <section>
        <label htmlFor="email">
          <input
            onChange={ (e) => handleSubmit(e) }
            name="email"
            data-testid="email-input"
            id="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <label htmlFor="password">
          <input
            onChange={ (e) => handleSubmit(e) }
            name="password"
            data-testid="password-input"
            id="password"
            type="password"
            placeholder="Senha"
          />
        </label>
        <Link
          to="/comidas"
        >
          <button
            disabled={ disabled }
            type="button"
            data-testid="login-submit-btn"
            onClick={ () => submitLocalStorage(user.email, history) }
          >
            Entrar
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Login;
