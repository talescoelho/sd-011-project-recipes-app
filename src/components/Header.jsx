import React, { useState } from 'react';
import SearchBar from './subcomponents/SearchBar';
import TopHeaderBar from './subcomponents/TopHeaderBar';

function Header() {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <header>
      <TopHeaderBar toggleSearchBar={ { searchBar, setSearchBar } } />
      { searchBar ? <SearchBar /> : null }
    </header>
  );
}

export default Header;
