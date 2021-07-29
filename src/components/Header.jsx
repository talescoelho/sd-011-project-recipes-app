import React from 'react';
import SearchBar from './subcomponents/SearchBar';
import TopHeaderBar from './subcomponents/TopHeaderBar';

function Header() {
  return (
    <header>
      <TopHeaderBar />
      <SearchBar />
    </header>
  );
}

export default Header;
