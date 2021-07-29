import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkEmailAndPass = (e, p) => {
    const validEmail = /^[a-zA-Z]+@[a-zA-Z]+\.[com]{3,}$/i;
    const passLength = 6;
    return validEmail.test(e) && p.length > passLength;
  };

  const setLocalStorage = (emailUser) => {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email: emailUser }));
  };

  return (
    <div>
      <input
        type="email"
        data-testid="email-input"
        placeholder="Digite seu email"
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="Digite sua senha"
        onChange={ ({ target }) => setPassword(target.value) }
      />

      <Link to="/comidas">
        <button
          type="button"
          data-testid="login-submit-btn"
          value="Entrar"
          disabled={ email && password ? !(checkEmailAndPass(email, password)) : true }
          onClick={ () => setLocalStorage(email) }
        />
      </Link>
    </div>
  );
}

export default Login;
