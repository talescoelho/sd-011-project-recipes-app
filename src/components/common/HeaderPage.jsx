import PropTypes from 'prop-types';
import React from 'react';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';

function HeaderPages({ pageName, search }) {
  return (
    <header>
      <img data-testid="profile-top-btn" alt="Profile Icon" src={ ProfileIcon } />
      <h3 data-testid="page-title">{ pageName }</h3>
      { search
        ? <img data-testid="search-top-btn" alt="Search Icon" src={ SearchIcon } />
        : null}
    </header>
  );
}

export default HeaderPages;

HeaderPages.propTypes = {
  pageName: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
};
