import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(true);

  function ableButton() {
    const numMin = 6;
    const regex = /\w+@\w+.com(.br)?/;
    if (regex.test(email) && password.length >= numMin) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }

  function loginInput({ target }) {
    setEmail(target.value);
    ableButton();
  }

  function passwordInput({ target }) {
    setPassword(target.value);
    ableButton();
  }

  return (
    <div>
      Login
      <input
        type="email"
        placeholder="Email"
        data-testid="email-input"
        onChange={ loginInput }
      />
      <input
        type="password"
        placeholder="Password"
        data-testid="password-input"
        onChange={ passwordInput }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ status }
      >
        Entrar
      </button>
    </div>
  );
}
