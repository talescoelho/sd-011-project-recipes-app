import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import LoginAux from '../components/Login/LoginAux';
import { saveEmail } from '../redux/actions';

const Login = () => {
  const [email, emailSet] = useState('');
  const [password, passSet] = useState('');
  const [disabled, buttonState] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const emailCheck = () => {
      const regex = /^[a-zA-Z]+@[a-zA-Z]+\.[com]{3,}$/i;
      const length = 6;

      if (email.match(regex) && password.length > length) buttonState(false);
      else buttonState(true);
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
    <Form>
      <LoginAux
        name="email"
        type="email"
        data-testid="email-input"
        setValue={ emailSet }
        label="Email:"
      />
      <br />
      <LoginAux
        name="password"
        type="password"
        data-testid="password-input"
        setValue={ passSet }
        label="Senha:"
      />
      <br />
      <Button
        type="button"
        data-testid="login-submit-btn"
        disabled={ disabled }
        onClick={ handleClick }
      >
        Entrar
      </Button>
    </Form>
  );
};

export default Login;
