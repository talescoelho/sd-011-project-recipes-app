import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <button type="button" data-testid="profile-top-btn">
          <img alt="Profile Icon" src="src/images/profileIcon.svg" />
        </button>
        <button type="button" data-testid="search-top-btn">
          <img alt="Search Icon" src="src/images/searchIcon.svg" />
        </button>
        <h1 data-testid="page-title">Comidas</h1>
      </div>
    );
  }
}

export default Header;
