import React, { useState, useEffect } from 'react';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [btnDisable, setBtnDisable] = useState(true)

  function validateLoginEntries() {
    const numberOfCharacters = 6;
    const regex = /\w+@\w+.com(.br)?/;

    if (email !== '' && regex.test(email) && password.length > numberOfCharacters) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }

  useEffect(() => {
    validateLoginEntries()
  }, [email, password])

  return (
    <div>
      <label>
        Email:
        <input
          data-testid="email-input"
          type="email"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <label>
        Senha:
        <input
          data-testid="password-input"
          type="password"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <button
        disabled={ btnDisable }
        data-testid="login-submit-btn"
        type="buttton"
      >
          Entrar
      </button>
    </div>
  );
}

export default Login;
