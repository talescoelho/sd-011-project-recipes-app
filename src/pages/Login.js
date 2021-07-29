import React from 'react';

function Login() {
  return (
    <main>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            placeholder="example@example.com"
            required
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            id="password"
            type="password"
            placeholder="Senha"
            required
            data-testid="password-input"
          />
        </label>
        <button type="button" data-testid="login-submit-btn">Entrar</button>
      </form>
    </main>
  );
}

export default Login;
