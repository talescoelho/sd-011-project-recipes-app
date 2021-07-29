import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';

function Header({ buttonExists, title }) {
  const [searchClicked, setSearchClicked] = React.useState(false);
  const history = useHistory();
  return (
    <div>

      <button
        type="button"
        data-testid="profile-top-btn"
        onClick={ () => history.push('/perfil') }
      >
        <img
          alt="profile"
          src={ profileIcon }
          style={ { padding: '20px' } }
        />
      </button>

      <h2 data-testid="page-title">{title}</h2>

      {buttonExists && (
        <button
          data-testid="search-top-btn"
          type="button"
          onClick={ () => setSearchClicked(!searchClicked) }
        >
          <img
            alt="search"
            src={ searchIcon }
            style={ { padding: '20px' } }
          />
        </button>
      )}

      {searchClicked && (
        <input type="text" placeholder="Buscar Receita" data-testid="search-input" />
      )}

    </div>
  );
}

Header.propTypes = {
  buttonExists: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
