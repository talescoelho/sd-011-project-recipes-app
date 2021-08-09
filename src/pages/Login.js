import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = ({ target: { value } }) => {
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (checkEmail.test(value)) return setEmail(value);
    return setEmail('');
  };

  const handleChangePassword = ({ target: { value } }) => {
    const checkPassword = 6;
    if (value.length > checkPassword) return setPassword(value);
    return setPassword('');
  };

  const LoginStorage = () => {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email }));
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Digite seu e-mail"
        data-testid="email-input"
        onChange={ handleChangeEmail }
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        data-testid="password-input"
        onChange={ handleChangePassword }
      />
      <Link to="/comidas">
        <Button
          type="button"
          data-testid="login-submit-btn"
          variant="success"
          disabled={ !email || !password }
          onClick={ LoginStorage }
        >
          Entrar
        </Button>
      </Link>
    </div>
  );
}
