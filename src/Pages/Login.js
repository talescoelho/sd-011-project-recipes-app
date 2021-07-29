import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabledButton: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.loginValidation = this.loginValidation.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => this.loginValidation());
  }

  handleLogin() {
    const { sendEmail } = this.props;
    const { email } = this.state;
    const user = { email };
    sendEmail(email);
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(user));
  }

  loginValidation() {
    const { password, email } = this.state;
    const format = /\S+@\S+\.\S+/;
    const minPassword = 6;
    if (password.length > minPassword && email.match(format)) {
      this.setState({ disabledButton: false });
    } else {
      this.setState({ disabledButton: true });
    }
  }

  render() {
    const { email, password, disabledButton } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              name="email"
              type="text"
              value={ email }
              placeholder="Digite seu email"
              onChange={ this.handleChange }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              name="password"
              type="password"
              value={ password }
              placeholder="Digite seu password"
              onChange={ this.handleChange }
              data-testid="password-input"
            />
          </label>
          <Link to="/comidas">
            <button
              type="button"
              disabled={ disabledButton }
              data-testid="login-submit-btn"
              onClick={ this.handleLogin }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (email) => dispatch(getLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  sendEmail: PropTypes.func.isRequired,
};
