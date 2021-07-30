import React, { useContext, useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ isDisabled, setIsDisable ] = useState(true);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
    [name]: value,
    }, () => this.LoginVerification());
  }

  const validateLogin = () => {
    let validate = false;
    const validateEmail = /^[\w.]+@[a-z]+\.\w{2,3}$/g;
    const validatePass = /[\S]{6,}/;
    if (!validateEmail.test(email)) validate = true;
    if (!validatePass.test(password)) validate = true;
    setIsDisable({ disable: validate });
  };

  return (
    <div>
      <label htmlFor="email">
        <input
          data-testid="email-input"
          type="email"
          placeholder="Digite seu email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
      </label>
      <label htmlFor="password">
        <input
          data-testid="password-input"
          type="password"
          placeholder="Digite sua senha"
          name="password"
          value={ password }
          onChange={  }
        />
      </label>
      {/* <Link to="/game"> */}
      <button
        data-testid="login-submit-btn"
        type="button"
        disabled={ isDisabled }
        // onClick={ this.handlePlayer }
      >
        Entrar
      </button>
      {/* </Link> */}
    </div>
  );
}
