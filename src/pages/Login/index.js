import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import { addEmail } from '../../redux/actions';

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

  useEffect(() => {
    localStorage.setItem('inProgressRecipes',
      JSON.stringify({ cocktails: {}, meals: {} }));
  }, []);

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
    <div>
      <form>
        <Input
          type="email"
          data-testid="email-input"
          id="email"
          name="email"
          setValue={ setEmail }
          label="Email:"
        />
        <br />
        <Input
          type="password"
          data-testid="password-input"
          id="password"
          name="password"
          setValue={ setPassword }
          label="Senha:"
        />
        <br />
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
