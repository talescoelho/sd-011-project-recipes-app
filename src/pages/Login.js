import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { saveTokensAndEmail } from '../helpers/handleLocalStorage';

// Página de Login, redireciona para página Foods ao entrar
function Login() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [email, setEmail] = useState('');

  // Valida os inputs de Login para abilitar o Button
  function validateLogin() {
    const formLogin = document.querySelector('.form-login');
    setIsButtonDisabled(!formLogin.checkValidity());
  }

  return (
    <form className="form-login" onChange={ validateLogin }>
      <h1>Login</h1>
      <label htmlFor="email-input">
        <input
          type="text"
          data-testid="email-input"
          placeholder="Email"
          id="email-input"
          required
          pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
          onChange={ ({ target: { value } }) => (setEmail(value)) }
        />
      </label>
      <label htmlFor="password-input">
        <input
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          id="password-input"
          required
          pattern=".{7,}"
        />
      </label>
      <Link to="/comidas">
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ isButtonDisabled }
          onClick={ () => saveTokensAndEmail(email) }
        >
          Entrar
        </button>
      </Link>
    </form>
  );
}
export default Login;
