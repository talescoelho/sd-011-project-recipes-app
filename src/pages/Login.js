import React, { useState } from 'react';

export default function Login() {
  // useEffect(() => {
  //   const btnLogin = document.querySelector('#button-login');
  //   btnLogin.disabled = true;
  // }, []);

  const [isDisabled, setIsDisable] = useState(true);

  function handleOnChangeInputValidate() {
    const correctEmailEntry = /(.*)@(.*).com/;
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const PasswordLength = 6;

    if (correctEmailEntry.test(email.value) && password.value.length > PasswordLength) {
      setIsDisable(false);
      return;
    }
    setIsDisable(true);
  }

  function emailInputRender() {
    return (
      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          data-testid="email-input"
          onChange={ () => handleOnChangeInputValidate() }
        />
      </label>
    );
  }

  function passwordInputRender() {
    return (
      <label htmlFor="password">
        <input
          type="password"
          id="password"
          data-testid="password-input"
          onChange={ () => handleOnChangeInputValidate() }
        />
      </label>
    );
  }

  function buttonLoginRender() {
    return (
      <label htmlFor="button-login">
        <input
          id="button-login"
          data-testid="login-submit-btn"
          type="button"
          value="login"
          disabled={ isDisabled }
        />
      </label>
    );
  }

  return (
    <main>
      { emailInputRender() }
      { passwordInputRender() }
      { buttonLoginRender() }

    </main>
  );
}
