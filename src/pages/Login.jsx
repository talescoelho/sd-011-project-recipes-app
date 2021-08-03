import React, { useState } from 'react';

function Login() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const patterns = {
    email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w@-]{6,20}$/,
  };

  function handleBtn() {
    if (patterns.email.test(email) && patterns.password.test(password)) {
      setIsDisabled(false);
      localStorage.setItem('mealsToken', '1');
      localStorage.setItem('cocktailsToken', '1');
      localStorage.setItem('user', email);
    }
  }

  return (
    <div className="">
      <h1>Login</h1>
      <input
        onChange={ ({ target: { value } }) => {
          setEmail(value);
          handleBtn();
        } }
        type="email"
        placeholder="Email"
        data-testid="email-input"
      />
      <input
        onChange={ ({ target: { value } }) => {
          setPassword(value);
          handleBtn();
        } }
        type="text"
        placeholder="senha"
        data-testid="password-input"
      />
      <br />
      <input
        onClick={ () => handleBtn() }
        disabled={ isDisabled }
        type="button"
        value="Entrar"
        data-testid="login-submit-btn"
      />
    </div>
  );
}

export default Login;
