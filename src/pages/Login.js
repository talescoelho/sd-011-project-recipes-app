import React from 'react';

function Login() {
  return (
    <main>
      <h1>Login</h1>
      <form>
        <input type="email" data-testid="email-input" placeholder="Email" />
        <input type="password" data-testid="password-input" placeholder="Senha" />
        <button type="button" data-testid="login-submit-btn">Entrar</button>
      </form>
    </main>
  );
}

export default Login;
