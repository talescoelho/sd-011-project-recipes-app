import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import FiltersBar from './FiltersBar';

export default function Header(props) {
  const [isVisibleSearchBar, setVisibleSearchBar] = useState(false);
  const history = useHistory();
  const { title, search, fetchType, filterBar } = props;
  // console.log('header', filterBar);
  // console.log('header', search);

  const renderSearchBar = () => <section><SearchBar fetchType={ fetchType } /></section>;
  const renderFiltersBar = () => (<FiltersBar fetchType={ fetchType } />);

  const buttonSearch = () => (
    <div
      role="button"
      onKeyPress={ () => setVisibleSearchBar(!isVisibleSearchBar) }
      onClick={ () => setVisibleSearchBar(!isVisibleSearchBar) }
      tabIndex="0"
    >
      <img
        data-testid="search-top-btn"
        alt="search button"
        src={ searchIcon }
      />
    </div>
  );

  return (
    <header>
      <section style={ { display: 'flex' } }>
        <div
          role="button"
          onKeyPress={ () => history.push('/perfil') }
          onClick={ () => history.push('/perfil') }
          tabIndex="0"
        >
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="profile icon"
          />
        </div>
        <h3 data-testid="page-title">{ title }</h3>
        { search && buttonSearch() }
      </section>
      <section>
        { isVisibleSearchBar && renderSearchBar() }
        { filterBar && !isVisibleSearchBar && renderFiltersBar() }
      </section>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  search: PropTypes.bool,
}.isRequired;
