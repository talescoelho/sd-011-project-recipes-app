import React, { useState } from 'react';
import { Layout } from '../components';

function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  function validateField(field, type) {
    const MIN_PASSWORD_LENGTH = 7;

    const validators = {
      email: (value) => /(.+)@(.+)\.(.+)/.test(value),
      password: (value) => value.length >= MIN_PASSWORD_LENGTH,
    };

    return validators[type](field);
  }

  return (
    <Layout>
      <main>
        <form>
          <input
            data-testid="email-input"
            type="email"
            value={ emailInput }
            placeholder="Email"
            onChange={ ({ target }) => setEmailInput(target.value) }
          />
          <input
            data-testid="password-input"
            type="password"
            value={ passwordInput }
            placeholder="Senha"
            onChange={ ({ target }) => setPasswordInput(target.value) }
          />
          <button
            data-testid="login-submit-btn"
            type="submit"
            disabled={
              !validateField(emailInput, 'email')
              || !validateField(passwordInput, 'password')
            }
          >
            Entrar
          </button>
        </form>
      </main>
    </Layout>
  );
}

export default Login;
