import React from 'react';

function Header() {
  return (
    <header>
      <button type="button" data-testid="profile-top-btn">Profile top btn</button>
      <h3 data-testid="page-title">Comidas</h3>
      <button type="button" data-testid="search-top-btn">Search top btn</button>
    </header>
  );
}

export default Header;
