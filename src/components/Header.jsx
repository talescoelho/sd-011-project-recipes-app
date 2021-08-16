import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../styles/Header.css';
import { HeaderNavBar } from '../styles';

function Header({ title, type, showSearchButton }) {
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
    <HeaderNavBar drink={ type === 'drink' }>
      <div className="btns">
        <Link to="/perfil">
          <button className="btn-perfil" type="button">
            <img src={ profileIcon } alt="Profile Icon" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h2 className="title" data-testid="page-title">{ title }</h2>
        { showSearchButton ? searchButton : null }
      </div>
      { showSearchBar ? <SearchBar type={ type } /> : null }
    </HeaderNavBar>
  );
}

export default Header;

Header.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  showSearchButton: PropTypes.bool,
};

Header.defaultProps = {
  showSearchButton: false,
  type: 'food',
};
