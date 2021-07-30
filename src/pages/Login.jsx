import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';

function Login() {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  /* aqui faço a minha validação de email usando regex */
  function handleEmail(e) {
    const Email = e;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(Email);
    setUser(Email);
    return setEmail(regex);
  }

  /* aqui faço a minha validação do tamanho da senha */
  function handlePassword(e) {
    const Password = e;
    const minLength = 6;
    let validPass = false;
    if (Password.length > minLength) {
      validPass = true;
    }
    return setPassword(validPass);
  }
  /* aqui salvo o token no local store */
  function setLocalStorage() {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email: user }));
  }

  return (
    <div className="container-login">
      <input
        className="Email"
        type="email"
        data-testid="email-input"
        placeholder="Digite seu Email"
        onChange={ ({ target }) => handleEmail(target.value) }
      />
      <input
        className="Password"
        type="password"
        data-testid="password-input"
        placeholder="Digite sua Senha"
        onChange={ ({ target }) => handlePassword(target.value) }
      />

      {/* aqui utilizo o link para direciona para tela de comida  */}
      <Link to="/comidas">
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ !email + !password }
          value={ user }
          onChange={ (e) => setUser(e.target.value) }
          onClick={ setLocalStorage }
        >
          Entrar
        </button>
      </Link>
    </div>
  );
}
export default Login;
