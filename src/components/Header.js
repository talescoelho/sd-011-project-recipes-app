import React, { useState } from 'react';
import '../css/Header.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import CategoryButtons from './CategoryButtons';

function Header({ title, icon, drinks, foods, explore }) {
  const [showSearchBar, setshowSearchBar] = useState(false);

  const renderSearchButtonIcon = () => (
    <button
      type="button"
      onClick={ () => setshowSearchBar(!showSearchBar) }
    >
      <img src={ searchIcon } alt="icone de uma lupa" data-testid="search-top-btn" />
    </button>
  );

  return (
    <header>
      <div className="header-container">
        <Link to="/perfil">
          <button
            type="button"
          >
            <img src={ profileIcon } alt="Profile Icon" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h3 data-testid="page-title">{`${title}`}</h3>
        {icon && renderSearchButtonIcon()}
      </div>
      {showSearchBar && <SearchBar drinks={ drinks } foods={ foods } />}
      <CategoryButtons drinks={ drinks } foods={ foods } explore={ explore } />
    </header>
  );
}

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.bool.isRequired,
  drinks: PropTypes.bool.isRequired,
  foods: PropTypes.bool.isRequired,
  explore: PropTypes.bool.isRequired,
};
