import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveEmail } from '../redux/actions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const emailCheck = () => {
      const regex = /^[a-zA-Z]+@[a-zA-Z]+\.[com]{3,}$/i;
      const length = 6;

      if (email.match(regex) && password.length < length) setDisabled(false);
      else setDisable(true);
    };

    emailCheck();
  }, [password, email]);

  function handleClick() {
    const emailAux = { email };
    const emailString = JSON.stringify(emailAux);

    window.localStorage.mealsToken = 1;
    window.localStorage.cocktailsToken = 1;
    window.localStorage.user = emailString;

    history.push('/comidas');
    dispatch(saveEmail(email));
  }

  return (
    <div>
      <form>
        <label htmlFor="email">
          <input
            type="email"
            data-testid="email-input"
            id="email"
            name="email"
            setValue={ setEmail }
            label="Email:"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            data-testid="password-input"
            id="password"
            name="password"
            setValue={ setPassword }
            label="Senha:"
          />
        </label>
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ disabled }
          onClick={ handleClick }
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
