import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';
import logo from '../images/logo.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(true);

  function ableButton() {
    const numMin = 6;
    const regex = /\w+@\w+.com(.br)?/;
    if (regex.test(email.email) && password.length >= numMin) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }

  function loginInput({ target }) {
    setEmail({ email: target.value });
    ableButton();
  }

  function passwordInput({ target }) {
    setPassword(target.value);
    ableButton();
  }

  function handleClickButtonLogin() {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(email));
  }

  return (

    <Card style={ { textAlign: 'center', margin: '0' } }>
      <Card.Img
        variant="top"
        src={ `${logo}` }
      />
      <Card.Body>
        <Card.Title>
          Login
        </Card.Title>
        <Form style={ { textAlign: 'center' } }>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              /* type="email" */
              placeholder="Enter email"
              data-testid="email-input"
              onChange={ loginInput }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              /*   type="password" */
              placeholder="*********"
              data-testid="password-input"
              onChange={ passwordInput }
            />
          </Form.Group>
          <Link to="/comidas">
            <Button
              variant="primary"
              /*  type="button" */
              data-testid="login-submit-btn"
              disabled={ status }
              onClick={ handleClickButtonLogin }
            >
              Entrar
            </Button>
          </Link>

        </Form>
      </Card.Body>
    </Card>

  );
}
