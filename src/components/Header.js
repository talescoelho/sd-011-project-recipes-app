import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import Profile from '../images/profileIcon.svg';
import Search from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header({ recipeType, title, searchButton }) {
  const [hide, setHide] = useState(false);
  const history = useHistory();
  const handleClick = () => {
    setHide((prevState) => !prevState);
  };
  return (
    <header className="container">
      <nav className="nav justify-content-around align-items-center">
        <button
          className="buttons-navbar"
          type="button"
          onClick={ () => history.push('/perfil') }
        >
          <img data-testid="profile-top-btn" src={ Profile } alt="user" />
        </button>
        <h1 data-testid="page-title">{title}</h1>
        {searchButton
        && (
          <button
            className="buttons-navbar"
            type="button"
            onClick={ handleClick }
          >
            <img data-testid="search-top-btn" src={ Search } alt="user" />
          </button>)}
      </nav>
      { hide
       && <SearchBar recipeType={ recipeType } />}
    </header>
  );
}

Header.propTypes = {
  searchButton: PropTypes.bool.isRequired,
  recipeType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
