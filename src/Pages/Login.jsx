import React /* , { useState } */ from 'react';

function Login() {
  // const [user, setUser] = useState({
  //   login: '',
  //   password: '',
  // });

  return (
    <div>
      <h1>Login</h1>
      <section>
        <label htmlFor="login">
          <input data-testid="email-input" id="login" type="email" placeholder="Email" />
        </label>
        <label htmlFor="password">
          <input
            data-testid="password-input"
            id="password"
            type="password"
            placeholder="Senha"
          />
        </label>
        <button type="button" data-testid="login-submit-btn">Entrar</button>
      </section>
    </div>
  );
}

export default Login;
