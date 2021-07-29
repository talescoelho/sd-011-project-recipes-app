import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidLogin, setInvalidLogin] = useState(true);

  const validLoginInputs = () => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;
    const testEmail = emailRegex.test(email);
    const passLength = 5;
    if (testEmail && password.length > passLength) {
      setInvalidLogin(false);
    } else {
      setInvalidLogin(true);
    }
  };

  return (
    <div className="loginPage">
      <h1>Ai que fome!</h1>
      <h3>Login</h3>

      <input
        type="text"
        data-testid="email-input"
        value={ email }
        onChange={ ({ target }) => {
          setEmail(target.value);
          validLoginInputs();
        } }
      />

      <input
        type="password"
        data-testid="password-input"
        value={ password }
        onChange={ ({ target }) => {
          setPassword(target.value);
          validLoginInputs();
        } }
      />

      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ invalidLogin }
      >
        Entrar
      </button>
    </div>
  );
}
