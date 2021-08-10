import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Input from '../components/Input';
import { addEmail } from '../redux/actions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkEmail = () => {
      const validEmail = /^[a-zA-Z]+@[a-zA-Z]+\.[com]{3,}$/i;
      const length = 6;

      if (email.match(validEmail) && password.length > length) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };
    checkEmail();
  }, [password, email]);

  function handleClick() {
    const emailLS = { email };
    const stringifyEmailLS = JSON.stringify(emailLS);

    window.localStorage.mealsToken = 1;
    window.localStorage.cocktailsToken = 1;
    window.localStorage.user = stringifyEmailLS;

    history.push('/comidas');
    dispatch(addEmail(email));
  }

  return (
    <div className="body d-flex j-c-center a-i-center">
      <form className="d-flex f-d-column a-i-stretch">
        <Input
          type="email"
          data-testid="email-input"
          id="email"
          name="email"
          setValue={ setEmail }
          placeHolder="Email"
          className="m-1 p-1"
        />
        <Input
          type="password"
          data-testid="password-input"
          id="password"
          name="password"
          setValue={ setPassword }
          placeHolder="Senha"
          className="m-1 p-1"
        />
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ disabled }
          onClick={ handleClick }
          className="m-1 btn"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
