import React from 'react';

export default function DataUserLogin() {
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [buttonActivated, setButtonActivated] = React.useState(false);

  function handleButton() {
    const minLengthPassword = 6;
    const verifyEmail = userEmail.includes('@') && userEmail.includes('.com');
    const verifyPassword = userPassword.length > minLengthPassword;
    if (verifyEmail && verifyPassword) {
      return setButtonActivated(true);
    }
    return setButtonActivated(false);
  }

  React.useEffect(() => {
    handleButton();
  }, [userEmail, userPassword]);

  return (
    <main>
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
      <button
        disabled={ !buttonActivated }
        type="button"
        data-testid="login-submit-btn"
      >
        Entrar
      </button>
    </main>
  );
}
