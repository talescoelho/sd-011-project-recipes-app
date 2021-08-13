import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBarHeader from './SearchBarHeader';
import '../styles/Header.css';

export default function Header({ title, renderButton, renderIMG }) {
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  const btn = (
    <button onClick={ () => setSearchBarVisible(!searchBarVisible) } type="button">
      <img src={ searchIcon } alt="search" data-testid="search-top-btn" />
    </button>
  );

  const img = <img src={ profileIcon } alt="profile" data-testid="profile-top-btn" />;

  return (
    <>
      <header>
        <Link to="/perfil">
          { !renderIMG && img }
        </Link>
        <h1 data-testid="page-title">{ title }</h1>
        { !renderButton && btn }
      </header>
      { searchBarVisible && <SearchBarHeader setSearchBarVisible={ setSearchBarVisible } /> }
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  renderButton: PropTypes.bool.isRequired,
  renderIMG: PropTypes.bool.isRequired,
};
