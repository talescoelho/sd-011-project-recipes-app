import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header({ text, lupa }) {
  const [showInput, setShowInput] = useState(false);

  const showSearchBar = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/perfil">
        <img src={ profileIcon } data-testid="profile-top-btn" alt="profileIcon" />
      </Link>
      <h3 data-testid="page-title">{text}</h3>
      {lupa
      && (
        <button
          type="button"
          onClick={ () => showSearchBar() }
        >
          <img data-testid="search-top-btn" src={ searchIcon } alt="searchIcon" />
        </button>)}
      {showInput && <input
        data-testid="search-input"
        type="text"
        name="foodName"
      />}
    </div>
  );
}

Header.propTypes = {
  lupa: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};
