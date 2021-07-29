import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <label htmlFor="email">
        <input
          data-testid="email-input"
          name="email"
          type="text"
          onChange={ (e) => { handleLogin(e); } }
          placeholder="Seu email"
        />
      </label>
      <label htmlFor="password">
        <input
          name="password"
          data-testid="password-input"
          type="password"
          placeholder="Seu Email"
          onChange={ (e) => { handleLogin(e); } }
        />
      </label>
    </div>
  );
}

export default Login;
