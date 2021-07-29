import React, { useState, useEffect } from 'react';
import credentialsVerify from '../Helpers/credentialsVerify';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

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
        <button
          disabled={ disabled }
          type="button"
          data-testid="login-submit-btn"
        >
          Entrar
        </button>
      </section>
    </div>
  );
}

export default Login;
