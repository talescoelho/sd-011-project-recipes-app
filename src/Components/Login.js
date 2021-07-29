import React from 'react';

function Login() {
  return (
    <div>
      <label>
        Email:
        <input
          data-testid="email-input"
          type="email"
        />
      </label>
      <label>
        Senha:
        <input
          data-testid="password-input"
          type="password"
        />
      </label>
      <button data-testid="login-submit-btn" type="buttton">Entrar</button>
    </div>
  );
}

export default Login;
