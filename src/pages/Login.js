import React from 'react';

export default function Login() {
  return (
    <div>
      <input type="text" data-testid="email-input" placeholder="email" />
      <input type="password" data-testid="password-input" placeholder="password" />
      <button data-testid="login-submit-btn" type="button">Login</button>
    </div>
  );
}
