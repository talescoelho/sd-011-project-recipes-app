import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../styles/Header.css';
import { HeaderNavBar } from '../styles';

function Header({ pageName, showSearchButton }) {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const showSearchBarHandler = () => (
    showSearchBar ? setShowSearchBar(false) : setShowSearchBar(true)
  );

  const searchButton = (
    <button
      className="btn-search"
      type="button"
      onClick={ showSearchBarHandler }
    >
      <img src={ searchIcon } alt="search icon" data-testid="search-top-btn" />
    </button>);

  return (
    <HeaderNavBar color={ pageName.includes('ebida') ? '#a73d7e' : null }>
      <div className="btns">
        <Link to="/perfil">
          <button className="btn-perfil" type="button">
            <img src={ profileIcon } alt="Profile Icon" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h2 className="title" data-testid="page-title">{ pageName }</h2>
        { showSearchButton ? searchButton : null }
      </div>
      { showSearchBar ? <SearchBar type={ pageName } /> : null }
    </HeaderNavBar>
  );
}

export default Header;

Header.propTypes = {
  pageName: PropTypes.string.isRequired,
  showSearchButton: PropTypes.bool.isRequired,
};
