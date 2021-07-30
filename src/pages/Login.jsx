import React, { useState } from 'react';

export default function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [LoginButtonStatus, setLoginButtonStatus] = useState(true);

  const handleInputVerify = ({ target }) => {
    const PASSWORD_MIN_LENGTH = 6;
    const EMAIL_INPUT = target.name === 'email' && target.value;
    const PASSWORD_INPUT = target.name === 'password' && target.value;

    if (EMAIL_INPUT) setLoginEmail(EMAIL_INPUT);
    if (PASSWORD_INPUT) setLoginPassword(PASSWORD_INPUT);
    if (PASSWORD_INPUT.length >= PASSWORD_MIN_LENGTH) setLoginButtonStatus(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailObject = { email: loginEmail };
    localStorage.setItem('user', JSON.stringify(emailObject));
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    window.location.pathname = '/comidas';
  };

  return (
    <div className="loginContainer">
      <form onSubmit={ (event) => handleSubmit(event) }>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            id="email"
            value={ loginEmail }
            onChange={ (event) => handleInputVerify(event) }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            id="password"
            value={ loginPassword }
            onChange={ (event) => handleInputVerify(event) }
            data-testid="password-input"
          />
        </label>
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ LoginButtonStatus }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
