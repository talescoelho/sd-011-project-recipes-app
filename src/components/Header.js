import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
// import './Header.css';

import HeaderSearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

// colocar type depois de searchBar
function Header({ searchBar, receiveData }) {
  const [showSearchBar, toggleShowSearchBar] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (!searchBar) {
      const btnSearch = document.getElementById('search-btn');
      btnSearch.disabled = true;
      btnSearch.style.opacity = 0;
    }
  }, [searchBar]);

  const toggleSearchBar = () => {
    if (showSearchBar) {
      toggleShowSearchBar(false);
    } else {
      toggleShowSearchBar(true);
    }
  };

  if (receiveData.meals && receiveData.meals.length === 1) {
    history.push(`/comidas/${receiveData.meals[0].idMeal}`);
  }

  if (receiveData.drinks && receiveData.drinks.length === 1) {
    history.push(`/bebidas/${receiveData.drinks[0].idDrink}`);
  }

  if (receiveData.drinks === null || receiveData.meals === null) {
    // eslint-disable-next-line no-alert
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }

  return (
    <>
      <header className="m-Header">
        <Link
          to="/perfil"
        >
          <button type="button" data-testid="profile-top-btn">
            <img src={ profileIcon } alt="icone do perfil" />
          </button>
        </Link>
        <h1 data-testid="page-title">{document.title}</h1>
        <button
          type="button"
          data-testid="search-top-btn"
          id="search-btn"
          onClick={ toggleSearchBar }
        >
          <img src={ searchIcon } alt="icone de pesquisa" />
        </button>
      </header>
      { showSearchBar && <HeaderSearchBar /> }
    </>
  );
}

const mapStateToProps = (state) => ({
  receiveData: state.searchBarReducer.receiveData,
  fetched: state.searchBarReducer.fetched,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  título: PropTypes.string,
  icone1: PropTypes.string,
  icone2: PropTypes.string,
}.isRequired;
