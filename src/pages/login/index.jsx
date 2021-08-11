import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setEmail } from '../../actions';

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
      email,
    };
    localStorage.setItem('user', JSON.stringify(userInfos));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
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

  submitLogin() {
    const { setEmailAction, history } = this.props;
    const { email } = this.state;
    setEmailAction(email);
    history.push('/comidas');
    this.setLocalStorage();
  }

  render() {
    const { email, password, isDisable } = this.state;
    return (
      <div className="form">
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
        <button
          type="submit"
          data-testid="login-submit-btn"
          onClick={ (event) => this.submitLogin(event) }
          disabled={ isDisable }
        >
          Entrar
        </button>
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
