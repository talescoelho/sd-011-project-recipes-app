import React from 'react';

function Header() {
  return (
    <div>
      <img
        data-testids="profile-top-btn"
        src="../images/profileIcon.svg"
        alt="imagem de user"
      />
      <h1 data-testids="page-title">Titulo </h1>
      <img
        data-testids="search-top-btn"
        src="../images/searchIcon.svg"
        alt="imagem lupa"
      />

    </div>
  );
}
export default Header;
