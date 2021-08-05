import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Login() {
  const { email, password, disabled } = state;
  const { setUserAction } = props;
  const { data, setFiltered, filter, setFilter } = useContext(DataContext);
  const [select1, setSelect1] = useState('');
  return (
    <div className="loginContainer">
      <h3>App de Receitas</h3>
      <div className="inputForm">
        <h3>Login</h3>
        <form>
          <label htmlFor="email-input">
            <input
              type="email"
              name="email"
              data-testid="email-input"
              placeholder="Email"
              value={ email }
              onChange={ (e) => handleChange(e.target) }
            />
          </label>
          <label htmlFor="password-input">
            <input
              type="password"
              name="password"
              data-testid="password-input"
              placeholder="Senha"
              value={ password }
              onChange={ (e) => handleChange(e.target) }
            />
          </label>
        </form>
      </div>
      <Link to="/carteira">
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ disabled }
          onClick={ () => setUserAction(email) }
        >
          Entrar
        </button>
      </Link>
    </div>
  );
}

export default Login;
