import React, { useState } from 'react';

const [ loginEmail, setLoginEmail] = useState('');
const [ loginPassword, setLoginPassword] = useState('');

const handleSubmit = ({ target }) => {
  console.log('submito');
}

function Login() {
  return(
    <div className="loginContainer">
      <form onSubmit={ (event) => handleSubmit(event)}>
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            value={ loginEmail }
            onChange={ setLoginEmail }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          <input 
            type="password"
            name="password"
            value={ loginPassword }
            onChange={ setLoginPassword }
            data-testid="password-input"
          />
        </label>
        <button
          type="submit"
          data-testid="login-submit-btn"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}

export default Login; 