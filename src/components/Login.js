import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import rockGlass from '../images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChangeState = this.handleChangeState.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  componentDidUpdate() {
    this.validateInput();
  }

  handleChangeState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  validateInput() {
    const { email, password, disabled } = this.state;
    const lengthNumberPassword = 6;
    const validateEmail = email.split('').includes('@')
      && email.split('.').includes('com');
    const verifyLengthPassword = password.length >= lengthNumberPassword;
    if (validateEmail && verifyLengthPassword && disabled) {
      this.setState({
        disabled: false,
      });
    } else if ((!validateEmail || !verifyLengthPassword) && !disabled) {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div>
        <div className="meals">
          <span className="logo">TRYBE</span>
          <object
            className="rocksGlass"
            type="image/svg+xml"
            data={ rockGlass }
          >
            Glass
          </object>
          <label htmlFor="email">
            <input
              data-testid="email-input"
              type="email"
              name="email"
              placeholder="E-mail"
              value={ email }
              onChange={ this.handleChangeState }
            />
          </label>
          <br />
          <label htmlFor="password">
            <input
              data-testid="password-input"
              type="password"
              name="password"
              placeholder="Senha"
              value={ password }
              onChange={ this.handleChangeState }
            />
          </label>
          <br />
          <Link to="/comidas">
            <button
              disabled={ disabled }
              data-testid="login-submit-btn"
              type="button"
            >
              Entrar
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
