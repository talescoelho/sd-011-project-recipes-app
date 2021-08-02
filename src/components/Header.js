import React from 'react';

export default function Header() {
  return (
    <header>
      <button type="button" data-testid="profile-top-btn">Profile</button>
      <h1 data-testid="page-title">Nome</h1>
      <label htmlFor="search-top">
        <input id="search-top" data-testid="search-top-btn" />
      </label>
    </header>
  );
}
