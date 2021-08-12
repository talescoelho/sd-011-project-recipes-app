import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../css/header.css';
import SearchBarMeals from './SearchBarMeals';
import SearchBarDrinks from './SearchBarDrinks';
import UserContext from '../context/UserContext';

export default function Header({ title }) {
  const { showSearch, setShowSearch } = useContext(UserContext);

  return (
    <div className="header">
      <div className="sub-header">
        <Link to="/perfil">
          <input
            type="image"
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="icone de perfil"
          />
        </Link>
        <h1 data-testid="page-title">{ title }</h1>
        <input
          type="image"
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="icone de lupa"
          onClick={ () => setShowSearch(!showSearch) }
        />
      </div>
      { title === 'Comidas' ? <SearchBarMeals /> : <SearchBarDrinks /> }
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
