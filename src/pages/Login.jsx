import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

function Login() {
  const { email,
    password,
    setEmail,
    setPassword,
  } = useContext(AppContext);

  function handleClick() {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    const localStorageEmail = { email };
    localStorage.setItem('user', JSON.stringify(localStorageEmail));
  }

  const verifyEmailAndPassword = () => {
    const reg = /\S+@\S+\.\S+/
      .test(email);
    const maxLenght = 6;
    if (reg && password.length > maxLenght) {
      return false;
    }
    return true;
  };

  return (
    <section>
      <input
        type="email"
        data-testid="email-input"
        placeholder="E-mail"
        onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="Senha"
        onChange={ (e) => setPassword(e.target.value) }
      />
      <Link to="/comidas">
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ verifyEmailAndPassword() }
          onClick={ handleClick }
        >
          Entrar
        </button>
      </Link>
    </section>
  );
}

export default Login;
