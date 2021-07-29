import React from 'react';

export default function Login() {
  return (
    <div className="loginPage">
      <h1>Ai que fome!</h1>
      <h3>Login</h3>

      <input
        type="text"
        data-testid="email-input"
      />

      <input
        type="text"
        data-testid="password-input"
      />

      <button
        type="button"
        data-testid="login-submit-btn"
      >
        Entrar
      </button>
    </div>
  );
}
