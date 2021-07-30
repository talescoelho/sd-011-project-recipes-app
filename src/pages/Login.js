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
    this.loginUser = this.loginUser.bind(this);
    
  }

  
  handleChangeForm({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.validateLogin();
  }

  loginUser(e) {
    e.preventDefault();
    const { history } = this.props;
    const { email } = this.state;
    localStorage.setItem('user', JSON.stringify({ email, }));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    history.push('/comidas')
  }

  validateLogin() {
    const { email, password } = this.state;
    const minSize = 6;
    const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (password.length >= minSize && re.test(email)) {
      this.setState({
        valid: false,
      });
    } else {
      this.setState({
        valid: true,
      });
    }
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
            onClick={ this.loginUser }
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
