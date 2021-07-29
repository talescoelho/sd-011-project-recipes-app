import React, { useContext } from 'react';
import RecipeAppContext from '../context/RecipeAppContext';

function Login() {
  const { handleChange, handleDisabled } = useContext(RecipeAppContext);
  console.log('handle' + handleDisabled());
  return (
      <div>
          <label htmlFor="email">
            Email
            <input 
              id="email"
              name="email" 
              type="email" 
              data-testid="email-input"
              onChange={ (e) => handleChange(e) }
            /> 
          </label> <br/>
          <label htmlFor="password" >
            Password
            <input 
              id="password" 
              name="password"
              type="password" 
              data-testid="password-input"
              onChange={ (e) => handleChange(e) }
            />
          </label> <br/>
        <button 
          type="button"
          data-testid="login-submit-btn"
          disabled={ handleDisabled() }
        >
          Entrar
        </button>           
      </div>
    )
}

export default Login;


