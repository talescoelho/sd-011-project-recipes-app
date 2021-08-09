import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

function Login(props) {
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const checkUser = () => {
    const { email, password } = user;
    const validEmail = /\w+@\w+\.com/;
    const passwordLength = 6;
    const isAllValid = validEmail.test(email) && password.length >= passwordLength;
    if (isAllValid) setDisabled(false);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({
      ...user,
      [name]: value,
    });

    checkUser();
  };

  const handleSubmit = () => {
    const { email } = user;
    const { history } = props;
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/comidas');
  };

  return (
    <form action="" className="center-items">
      <input
        value={ user.email }
        onChange={ handleChange }
        data-testid="email-input"
        type="text"
        name="email"
        className="input-email"
        placeholder="email"
      />
      <input
        value={ user.password }
        onChange={ handleChange }
        data-testid="password-input"
        type="password"
        name="password"
        className="input-password"
        placeholder="password"
      />
      <button
        onClick={ handleSubmit }
        disabled={ disabled }
        data-testid="login-submit-btn"
        type="button"
      >
        Entrar
      </button>
    </form>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func }).isRequired,
};

export default withRouter(Login);
