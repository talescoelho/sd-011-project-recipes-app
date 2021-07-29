import React from 'react';

export default function Login() {
  return (
      <div>
          <label htmlFor="email">
            Email
            <input id="email" type="email" data-testid="email-input"/> 
          </label> <br/>
          <label htmlFor="password" >
            Password
            <input id="password" type="password" data-testid="password-input"/>
          </label> <br/>
        <button type="button" data-testid="login-submit-btn">Entrar</button>           
      </div>
    )
}


