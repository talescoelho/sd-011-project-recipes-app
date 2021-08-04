import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../hooks';
import { SearchForm } from '../..';
import ProfileIcon from '../../../images/profileIcon.svg';
import SearchIcon from '../../../images/searchIcon.svg';

function Header({ search }) {
  const { colors } = useTheme();

  const [showInput, setShowInput] = useState(false);

  const styles = {
    header: {
      backgroundColor: colors.background,
      color: colors.primaryColor,
    },
  };
  const handleShowSeachInput = () => (
    showInput ? setShowInput(false) : setShowInput(true)
  );

  const handleTypeRequisition = () => (title === 'Comidas' ? 'meals' : 'drinks');

  return (
    <header style={ styles.header }>
      <Link to="/perfil">
        <img
          data-testid="profile-top-btn"
          alt="Ver meu perfil"
          src={ ProfileIcon }
        />
      </Link>
      <h3 data-testid="page-title">{ title }</h3>
      { search
            && (
              <button
                type="button"
                onClick={ () => handleShowSeachInput() }
              >
                <img
                  data-testid="search-top-btn"
                  alt="Buscar receitas"
                  src={ SearchIcon }
                />
              </button>
            )}
      {showInput && <SearchForm type={ handleTypeRequisition() } />}

    </header>
  );
}

Header.defaultProps = {
  search: false,
};

Header.propTypes = {
  search: PropTypes.bool,
};

export default Header;
