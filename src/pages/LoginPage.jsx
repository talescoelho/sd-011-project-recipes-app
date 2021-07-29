import React from 'react';

function LoginPage() {
  return (
    <form method="POST">
      <section className="container">
        <label htmlFor="email">
          Email:
          <input
            type="text"
            id="email"
            name="email"
            data-testid="email-input"
            placeholder="Digite seu email"
            required
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            type="password"
            id="senha"
            name="password"
            data-testid="password-input"
            placeholder="Digite sua senha"
            required
          />
        </label>
        <button
          type="submit"
          data-testid="login-submit-btn"
        >
          Entrar
        </button>
      </section>
    </form>
  );
}

export default LoginPage;
