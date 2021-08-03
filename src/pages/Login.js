import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeAppContext from '../context/RecipeAppContext';
import '../css/Login.css';

function Login() {
  const { handleChange, handleDisabled, email } = useContext(RecipeAppContext);

  const submitCredentials = () => {
    const emailStringfied = JSON.stringify({ email });
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', emailStringfied);
  };

  return (
    <div>
      <form className="login">
        <p className="login-text">LOGIN</p>
        <div className="form-group">
          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              data-testid="email-input"
              onChange={ (e) => handleChange(e) }
            />
          </label>
        </div>
        {' '}
        <br />
        <div className="form-group">
          <label htmlFor="password">
            Password
            <input
              id="password"
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              data-testid="password-input"
              onChange={ (e) => handleChange(e) }
            />
          </label>
        </div>
        {' '}
        <br />
        <Link to="/comidas">
          <Button
            type="button"
            data-testid="login-submit-btn"
            className="button-login"
            onClick={ () => submitCredentials() }
            disabled={ handleDisabled() }
          >
            Entrar
          </Button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
