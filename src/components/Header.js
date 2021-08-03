import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import FiltersBar from './FiltersBar';

export default function Header(props) {
  const [isVisibleBar, setVisibleBar] = useState(false);
  const history = useHistory();
  const { title, search, fetchType } = props;

  const renderSearchBar = () => <section><SearchBar fetchType={ fetchType } /></section>;
  const renderFiltersBar = () => (<FiltersBar fetchType={ fetchType } />);

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
      <section>
        { isVisibleBar ? renderSearchBar() : renderFiltersBar() }
      </section>
    </>
  );

  return (
    <header>
      <section>
        <button
          type="button"
          onClick={ () => history.push('/perfil') }
        >
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="profile icon"
          />
        </button>
      </section>
      <h3 data-testid="page-title">{ title }</h3>
      { search && buttonSearch() }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  search: PropTypes.bool,
}.isRequired;
