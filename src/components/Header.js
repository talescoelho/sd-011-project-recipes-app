import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header(props) {
  const [showInput, setshowInput] = useState(false);
  const { setDrinkFromSearch, setFoodFromSearch, title, search = false } = props;
  return (
    <header>
      <div>
        <Link to="/perfil">
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="imagem de user"
          />
        </Link>
        <h1 data-testid="page-title">{ title }</h1>
        {search
      && (
        <button type="button" onClick={ () => setshowInput(!showInput) }>
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="imagem lupa"
          />
        </button>
      )}
      </div>
      { showInput && <SearchBar
        setDrinkFromSearch={ setDrinkFromSearch }
        setFoodFromSearch={ setFoodFromSearch }
      /> }

    </header>
  );
}

Header.defaultProps = {
  search: false,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.bool,
  setDrinkFromSearch: PropTypes.func.isRequired,
  setFoodFromSearch: PropTypes.func.isRequired,
};
export default Header;
