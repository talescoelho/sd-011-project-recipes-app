import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidLogin, setInvalidLogin] = useState(true);

  const inputHandle = ({ target }) => {
    const { name, value } = target;
    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const validLoginInputs = () => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;
    const testEmail = emailRegex.test(email);
    const passLength = 6;
    if (testEmail && password.length > passLength) {
      setInvalidLogin(false);
    } else {
      setInvalidLogin(true);
    }
  };

  const loginHandle = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
  };

  return (
    <div className="loginPage">
      <h1>Ai que fome!</h1>
      <h3>Login</h3>

      <input
        type="text"
        data-testid="email-input"
        name="email"
        value={ email }
        onChange={ (event) => {
          inputHandle(event);
        } }
        onKeyUp={ validLoginInputs }
      />

      <input
        type="password"
        data-testid="password-input"
        name="password"
        value={ password }
        onChange={ (event) => {
          inputHandle(event);
        } }
        onKeyUp={ validLoginInputs }
      />
      <Link to="/comidas">
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ invalidLogin }
          onClick={ loginHandle }
        >
          Entrar
        </button>
      </Link>
    </div>
  );
}
