import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setEmail } from '../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.enableBtnLogin = this.enableBtnLogin.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.enableBtnLogin());
  }

  setLocalStorage() {
    const { email } = this.state;
    const userInfos = {
      mealsToken: 0,
      cocktailsToken: 0,
      user: {
        email,
      },
    };
    return localStorage.setItem('state', JSON.stringify(userInfos));
  }

  validateEmail(email) {
    const parseEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return parseEmail.test(email);
  }

  validatePassword(password) {
    const minOfCharacters = 6;
    return (password.length > minOfCharacters);
  }

  enableBtnLogin() {
    const { email, password } = this.state;
    if (this.validateEmail(email) && this.validatePassword(password)) {
      this.setState({ isDisable: false });
    } else {
      this.setState({ isDisable: true });
    }
  }

  submitLogin(event) {
    event.preventDefault();
    const { setEmailAction } = this.props;
    const { email } = this.state;
    setEmailAction(email);
  }

  render() {
    const { email, password, isDisable } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="input-email">
            <input
              type="email"
              data-testid="email-input"
              name="email"
              id="input-email"
              value={ email }
              placeholder="Email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="input-password">
            <input
              type="password"
              data-testid="password-input"
              name="password"
              id="input-password"
              value={ password }
              placeholder="Password"
              onChange={ this.handleChange }
            />
          </label>
        </form>
        <Link to="/comidas">
          <button
            type="submit"
            data-testid="login-submit-btn"
            onClick={ (e) => this.submitLogin(e) }
            disabled={ isDisable }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmailAction: (payload) => dispatch(setEmail(payload)),
});

Login.propTypes = {
  setEmailAction: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
