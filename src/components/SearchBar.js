import React from 'react';
import DrinksSearchBar from './DrinksSearchBar';
import FoodsSearchBar from './FoodsSearchBar';

function SearchBar({ drinks, foods }) {
  return (
    <div>
      {drinks && <DrinksSearchBar />}
      {foods && <FoodsSearchBar />}
    </div>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  drinks: PropTypes.bool.isRequired,
  foods: PropTypes.bool.isRequired,
};
