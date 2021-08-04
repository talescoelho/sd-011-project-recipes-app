import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import HeaderSearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

// colocar type depois de searchBar
function Header() {
  const [showSearchBar, toggleShowSearchBar] = useState(false);
  const { pathname } = useLocation();

  const [showSearchIcon, setShowSearchIcon] = useState(false);
  useEffect(() => {
    const urlArray = ['/explorar/comidas/area', '/comidas', '/bebidas'];
    if (urlArray.includes(pathname)) {
      setShowSearchIcon(true);
    } else {
      setShowSearchIcon(false);
    }
  }, [pathname]);

  const toggleSearchBar = () => {
    if (showSearchBar) {
      toggleShowSearchBar(false);
    } else {
      toggleShowSearchBar(true);
    }
  };

  return (
    <>
      <header className="m-Header">
        <Link
          to="/perfil"
        >
          <button src={ profileIcon } type="button" data-testid="profile-top-btn">
            <img src={ profileIcon } alt="icone do perfil" />
          </button>
        </Link>
        <h1 data-testid="page-title">{document.title}</h1>

        { showSearchIcon && (
          <button
            src={ searchIcon }
            type="button"
            data-testid="search-top-btn"
            id="search-btn"
            onClick={ toggleSearchBar }
          >
            <img src={ searchIcon } alt="icone de pesquisa" />
          </button>)}
      </header>
      { showSearchBar && <HeaderSearchBar /> }
    </>
  );
}

export default Header;

Header.propTypes = {
  título: PropTypes.string,
  icone1: PropTypes.string,
  icone2: PropTypes.string,
}.isRequired;
