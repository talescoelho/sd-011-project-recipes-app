import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ value }) {
  const history = useHistory();
  const { pageName, setIcon } = value;

  function handleButton() {
    if (setIcon) {
      return (
        <button
          type="button"
        >
          <img data-testid="search-top-btn" src={ searchIcon } alt="buscar" />
        </button>
      );
    }
  }

  return (
    <header>
      <button
        type="button"
        onClick={ () => history.push('/perfil') }
      >
        <img
          data-testid="profile-top-btn"
          alt="User"
          src={ profileIcon }
        />
      </button>
      <h1 data-testid="page-title">{ pageName }</h1>
      { handleButton() }
    </header>
  );
}

Header.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Header;
