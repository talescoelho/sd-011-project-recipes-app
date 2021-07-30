import React from 'react';

const passwordLength = 5;
class LoginPage extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
    this.handleLoginChange = this.handleLoginChange.bind(this);
  }

  handleLoginChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, this.isLoginValid());
  }

  setToken() {
    // const token = await fetchToken();
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
  }

  isLoginValid() {
    const { email, password } = this.state;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    this.setState({
      isDisabled: !(password.length > passwordLength && emailPattern.test(email)),
    });
  }

  render() {
    const { email, password, isDisabled } = this.state;

    return (

      <form method="POST">
        <section className="container">
          <label htmlFor="email">
            <b>Email:</b>
            <input
              type="text"
              id="email"
              name="email"
              value={ email }
              onChange={ this.handleLoginChange }
              data-testid="email-input"
              placeholder="Digite seu email"
            />
          </label>
          <label htmlFor="senha">
            <b>Senha:</b>
            <input
              type="password"
              id="senha"
              name="password"
              value={ password }
              onChange={ this.handleLoginChange }
              data-testid="password-input"
              placeholder="Digite sua senha"
            />
          </label>
          <button
            type="submit"
            disabled={ isDisabled }
            data-testid="login-submit-btn"
          >
            <b>Entrar</b>
          </button>
        </section>
      </form>
    );
  }
}

export default LoginPage;
