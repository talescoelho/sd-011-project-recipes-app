import React from 'react';

export default function Header() {
  return (
    <header>
      <button type="button" data-testid="profile-top-btn">Top Button</button>
      <h1 data-testid="page-title">Title</h1>
      <button type="button" data-testid="search-top-btn">Search Button</button>
    </header>
  );
}
