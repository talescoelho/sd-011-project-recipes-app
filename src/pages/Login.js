import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = ({ target: { value } }) => {
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    checkEmail.test(value) ? setEmail(value) : setEmail('');
  }

  const handleChangePassword = ({ target: { value } }) => {
    const checkPassword = 6;
    value.length > checkPassword ? setPassword(value) : setPassword('');
  }

  return (
    <div>
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
      <Button
        type="button"
        data-testid="login-submit-btn"
        variant="primary"
        disabled={ !email || !password}
        
      >
        Entrar
      </Button>
    </div>
  )
}
