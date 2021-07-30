import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import Profile from '../images/profileIcon.svg';
import Search from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import { Nav } from './styles';

export default function Header({ recipeType, title }) {
  const [hide, setHide] = useState(false);
  const history = useHistory();
  const handleClick = () => {
    setHide((prevState) => !prevState);
  };
  return (
    <>
      <Nav>
        <button type="button" onClick={ () => history.push('/perfil') }>
          <img data-testids="profile-top-btn" src={ Profile } alt="user" />
        </button>
        <h1 data-testids="page-title">{title}</h1>
        <button
          type="button"
          onClick={ handleClick }
          data-testids="search-top-btn"
        >
          <img src={ Search } alt="user" />
        </button>
      </Nav>
      { hide
       && <SearchBar recipeType={ recipeType } />}
    </>
  );
}

Header.propTypes = {
  recipeType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
