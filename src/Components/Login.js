import React, { useState, useEffect } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnDisable, setBtnDisable] = useState(true);

  useEffect(() => {
    function validateLoginEntries() {
      const numberOfCharacters = 6;
      const regex = /\w+@\w+.com(.br)?/;

      if (email !== '' && regex.test(email) && password.length > numberOfCharacters) {
        setBtnDisable(false);
      } else {
        setBtnDisable(true);
      }
    }
    validateLoginEntries();
  }, [email, password]);

  return (
    <div>
      <label htmlFor="email">
        Email:
        <input
          data-testid="email-input"
          type="email"
          id="email"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          data-testid="password-input"
          type="password"
          id="password"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <button
        disabled={ btnDisable }
        data-testid="login-submit-btn"
        type="button"
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
