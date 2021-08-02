import React, { useState } from 'react';
import { Layout } from '../components';

function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

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
          >
            Entrar
          </button>
        </form>
      </main>
    </Layout>
  );
}

export default Login;
