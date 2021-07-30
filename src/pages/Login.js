import React, { Component } from 'react';

export default class Login extends Component {
  constructor(){
    super();

    this.state = {
      email: '',
      password: '',
      valid: true,
    };
    this.handleChangeForm = this.handleChangeForm.bind(this);
  }

  
  handleChangeForm({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.validateLogin();
  }

  renderLoginForm() {
    const { email, password, valid } = this.state;
    return (
      <form>
        <div className="input">
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChangeForm }
          />
        </div>
        <div className="input">
          <input
            type="password"
            name="password"
            placeholder="Digite sua Senha"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChangeForm }
          />
          <button
            type="submit"
            data-testid="login-submit-btn"
            disabled={ valid }
            onClick={ loginUser() }
          >
            Entrar
          </button>
        </div>
      </form>
    );
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        {this.renderLoginForm()}
      </div>
    );
  }
}
