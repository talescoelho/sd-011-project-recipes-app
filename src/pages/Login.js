import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [login, setLogin] = React.useState({
    email: '',
    password: '',
  });
  const [disabled, setDisabled] = React.useState({
    disabled: true,
  });
  
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
      <Link to="/Comida">
        <button
          type="button"
          data-testid="login-submit-btn"
        >
          Entrar
        </button>
      </Link>
    </div>
  );
}

export default Login;
