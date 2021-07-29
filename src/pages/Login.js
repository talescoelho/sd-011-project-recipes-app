import React from 'react';

function Login() {
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
            required
            data-testid="email-input"
          />
        </label>
      </form>
    </main>
  );
}

export default Login;
