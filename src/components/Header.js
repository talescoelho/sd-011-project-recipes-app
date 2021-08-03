import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MainContext from '../context/MainContext';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ title, isButtonVisible }) {
  const {
    searchBarShow,
    setSearchBarShow,
  } = useContext(MainContext);

  function searchButton() {
    if (isButtonVisible) {
      return (
        <button
          type="button"
          onClick={ () => setSearchBarShow(!searchBarShow) }
        >
          <img
            data-testid="search-top-btn"
            src={ SearchIcon }
            alt="search icon"
          />
        </button>
      );
    }
  }

  return (
    <header>
      <a
        href="/perfil"
      >
        <img
          data-testid="profile-top-btn"
          src={ ProfileIcon }
          alt="user profile"
        />
      </a>
      <h3 data-testid="page-title">{ title }</h3>
      { searchButton() }
      { searchBarShow ? <SearchBar /> : null }
    </header>
  );
}

Header.defaultProps = {
  isButtonVisible: false,
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  isButtonVisible: PropTypes.bool,
};

export default Header;
