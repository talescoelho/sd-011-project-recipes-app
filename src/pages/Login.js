import React from 'react';

export default function Login() {
  return (
    <div>
      <input
        type="email"
        data-testid="email-input"
        placeholder="email"
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="senha"
      />
      <button
        type="button"
        data-testid="login-submit-btn"
      >
        Login
      </button>
    </div>
  );
}
