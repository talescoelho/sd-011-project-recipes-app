import React from 'react';

function Login() {
  // const checkEmailAndPass = (e, p) => {
  //   const validEmail = /^[a-zA-Z]+@[a-zA-Z]+\.[com]{3,}$/i;
  //   const passLength = 6;
  //   return validEmail.test(e) && p.length >= passLength;
  // };

  return (
    <div>
      <label htmlFor="email-input">
        Email:
        <input type="email" data-testid="email-input" id="email-input" />
      </label>

      <label htmlFor="password-input">
        Senha:
        <input type="password" data-testid="password-input" />
      </label>

      <button
        type="button"
        data-testid="login-submit-btn"
        // disabled={ email && pass ? !(checkEmailAndPass(email, pass)) : true }
        // onClick={ () => (credentials(email)) }
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
