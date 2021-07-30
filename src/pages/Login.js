import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

class Login extends Component {
  constructor() {
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
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    history.push('/comidas');
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
      <Form className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChangeForm }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Digite sua Senha"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChangeForm }
          />
        </Form.Group>
        <Button
          type="submit"
          size="lg"
          variant="success"
          data-testid="login-submit-btn"
          disabled={ valid }
          onClick={ this.loginUser }
        >
          Entrar
        </Button>
      </Form>
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

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
