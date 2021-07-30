import React, { useContext } from 'react';
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
  }

  const verifyEmailAndPassword = () => {
    const reg = /\S+@\S+\.\S+/
      .test(email);
    const maxLenght = 6;
    if (reg && password.length >= maxLenght) {
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
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ verifyEmailAndPassword() }
        onClick={ handleClick }
      >
        Entrar
      </button>
    </section>
  );
}

export default Login;
