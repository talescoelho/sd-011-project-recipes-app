import React from 'react';

function SearchBar() {
  return (
    <div className="searchBar">
      <input
        data-testid="search-input"
        type="text"
        placeholder="Buscar Receita"
      />
    </div>
  );
}

export default SearchBar;
