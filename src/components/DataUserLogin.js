import React from 'react';

export default function DataUserLogin() {
  return (
    <main>
      <input
        type="text"
        placeholder="Digite seu email"
        data-testid="email-input"
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        data-testid="password-input"
      />
      <button
        type="button"
        data-testid="login-submit-btn"
      >
        Entrar
      </button>
    </main>
  );
}
