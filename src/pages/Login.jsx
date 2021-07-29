import React from 'react';

function Login() {
  return (
    <section>
      <input
        type="email"
        data-testid="email-input"
        placeholder="E-mail"
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="Senha"
      />
      <button
        type="button"
        data-testid="login-submit-btn"
      >
        Entrar
      </button>
    </section>
  );
}

export default Login;
