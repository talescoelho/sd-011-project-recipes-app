import React from 'react';
import { Link } from 'react-router-dom';

export default function DataUserLogin() {
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [buttonActivated, setButtonActivated] = React.useState(false);

  function setLocalStorageToken() {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email: userEmail }));
  }

  React.useEffect(() => {
    function handleEnterButton() {
      const minLengthPassword = 6;
      const emailIsValid = userEmail.includes('@') && userEmail.includes('.com');
      const passwordIsValid = userPassword.length > minLengthPassword;
      if (emailIsValid && passwordIsValid) {
        return setButtonActivated(true);
      }
      return setButtonActivated(false);
    }
    handleEnterButton();
  }, [userEmail, userPassword]);

  return (
    <main className="login-container">
      <input
        value={ userEmail }
        onChange={ ({ target }) => setUserEmail(target.value) }
        type="text"
        placeholder="Digite seu email"
        data-testid="email-input"
      />
      <input
        value={ userPassword }
        onChange={ ({ target }) => setUserPassword(target.value) }
        type="password"
        placeholder="Digite sua senha"
        data-testid="password-input"
      />
      <Link to="/comidas">
        <button
          disabled={ !buttonActivated }
          onClick={ setLocalStorageToken }
          type="button"
          data-testid="login-submit-btn"
        >
          Entrar
        </button>
      </Link>
    </main>
  );
}
