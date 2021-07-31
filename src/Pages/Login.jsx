import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      email: '',
    };
    this.validaLogin = this.validaLogin.bind(this);
    this.saveEmail = this.saveEmail.bind(this);
    this.sendEmailAndPasswordToLocalStorage = this
      .sendEmailAndPasswordToLocalStorage.bind(this);
  }

  saveEmail({ target: { value } }) {
    this.setState({ email: value });
  }

  redirect() {
    const { history } = this.props;
    history.push('/comidas');
  }

  validaLogin({ target: { value } }) {
    const lengthPassword = 6;
    const validaEmail = /\S+@\S+\.\S+/;
    const { email } = this.state;
    if (value.length > lengthPassword && validaEmail.test(email)) {
      this.setState({ login: true });
    }
  }

  sendEmailAndPasswordToLocalStorage(event) {
    event.preventDefault();
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    const { email } = this.state;
    const user = {
      email,
    };
    localStorage.setItem('user', JSON.stringify(user));
    this.redirect();
  }

  render() {
    const { login } = this.state;
    return (
      <form onSubmit={ this.sendEmailAndPasswordToLocalStorage }>
        <label htmlFor="email">
          E-mail
          <input
            type="text"
            id="email"
            data-testid="email-input"
            onChange={ (event) => this.saveEmail(event) }
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            data-testid="password-input"
            onChange={ (event) => this.validaLogin(event) }
          />
        </label>
        <button
          disabled={ !login }
          type="submit"
          data-testid="login-submit-btn"
        >
          Submit
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
