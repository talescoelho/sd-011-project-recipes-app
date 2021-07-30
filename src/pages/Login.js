import React from 'react';

const minPasswordLength = 6;

// Email Regex Source: http://jsfiddle.net/ghvj4gy9/
// eslint-disable-next-line max-len
const username = '^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()[\\]\\.,;:\\s@"]+)*)|(".+"))';
const domainName = '@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}';
const domain = '\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
const EMAIL_REGEX = new RegExp([username, domainName, domain].join(''));

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isFormValid, setIsFormValid] = React.useState(false);

  React.useEffect(() => {
    const formValidation = () => {
      const isValid = EMAIL_REGEX.test(email) && password.length > minPasswordLength;
      setIsFormValid(isValid);
    };

    formValidation();
  }, [email, password]);

  return (
    <main>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            placeholder="example@example.com"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            required
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            id="password"
            type="password"
            placeholder="Senha"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
            required
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
          disabled={ !isFormValid }
          data-testid="login-submit-btn"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}

export default Login;
