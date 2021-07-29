import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function verifyLogin() {
    const validEmail = /\S+@\S+\.\S+/;
    const pwLength = 6;
    if ((password.length > pwLength) && (validEmail.test(email))) {
      return false;
    }
    return true;
  }

  return (
    <form>
      <input
        type="email"
        value={ email }
        data-testid="email-input"
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        type="password"
        value={ password }
        data-testid="password-input"
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ verifyLogin() }
      >
        Entrar
      </button>
    </form>
  );
}
