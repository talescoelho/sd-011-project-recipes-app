import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [isDisabled, setIsDisable] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

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

  function ButtonLoginHandler() {
    const email = document.querySelector('#email');
    const emailObj = {
      email: email.value,
    };
    localStorage.user = JSON.stringify(emailObj);
    localStorage.mealsToken = 1;
    localStorage.cocktailsToken = 1;
    dispatch({ type: 'SEND_USER_EMAIL_TO_STORE', payload: email.value });
    history.push('/comidas');
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
          onClick={ () => ButtonLoginHandler() }
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
