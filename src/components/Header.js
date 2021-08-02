import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import { RecipesProvider } from '../context/RecipesContext';
import FiltersBar from './FiltersBar';

export default function Header(props) {
  const [isVisibleBar, setVisibleBar] = useState(false);
  const history = useHistory();
  const { title, search, fetchType } = props;

  const renderSearchBar = () => <section><SearchBar fetchType={ fetchType } /></section>;

  const renderFiltersBar = () => (
    <RecipesProvider>
      <FiltersBar />
    </RecipesProvider>
  );

  const buttonSearch = () => (
    <>
      <button
        type="button"
        onClick={ () => setVisibleBar(!isVisibleBar) }
      >
        <img
          data-testid="search-top-btn"
          alt="search button"
          src={ searchIcon }
        />
      </button>
      { isVisibleBar ? renderSearchBar() : renderFiltersBar() }
    </>
  );

  return (
    <header style={ { display: 'flex' } }>
      <button
        // style={ { display: 'none' } }
        type="button"
        onClick={ () => history.push('/perfil') }
      >
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile icon"
        />
      </button>
      <h3 data-testid="page-title">{ title }</h3>
      { search && buttonSearch() }
      {/* style={ { position: 'fixed', height: '200vh' } } */}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  search: PropTypes.bool,
}.isRequired;
