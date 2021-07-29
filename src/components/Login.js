import React, { useState, useEffect } from 'react';
import rockGlass from '../images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });
  const [validate, setValidate] = useState({ validate: false });
  const passwordLimit = 6;

  const validateInputs = () => {
    const regex = /.+@.+\.[A-Za-z]+$/.test(loginInput.email);
    if (regex && loginInput.password.length >= passwordLimit) {
      setValidate({ validate: true });
    }
  };

  useEffect(() => {
    validateInputs();
  }, [loginInput.password]);

  return (
    <div>
      <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          data-testid="email-input"
          onChange={ (e) => setLoginInput({
            ...loginInput,
            email: e.target.value,
          }) }
        />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          data-testid="password-input"
          onChange={ (e) => setLoginInput({
            ...loginInput,
            password: e.target.value,
          }) }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ !validate.validate }
      >
        Entrar
      </button>
    </div>
  );
}
