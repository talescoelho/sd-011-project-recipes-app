import React, { Component } from 'react';
import PropTypes from 'prop-types';
import profile from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';

class Header extends Component {
  constructor() {
    super();
    this.withSearch = this.withSearch.bind(this);
    this.withOutSearch = this.withOutSearch.bind(this);
  }

  withSearch() {
    const { pageTitle } = this.props;
    return (
      <header>
        <h1 data-testid="page-title">{pageTitle}</h1>
        <input
          type="image"
          data-testid="profile-top-btn"
          src={ profile }
          alt=" Profile Icon"
        />
        &nbsp;  &nbsp;  &nbsp;
        <input
          type="image"
          data-testid="search-top-btn"
          src={ search }
          alt=" Search Icon"
        />
      </header>
    );
  }

  withOutSearch() {
    const { pageTitle } = this.props;
    return (
      <header>
        <h1 data-testid="page-title">{ pageTitle }</h1>
        <input
          type="image"
          data-testid="profile-top-btn"
          src={ profile }
          alt=" Profile Icon"
        />
      </header>
    );
  }

  render() {
    const { withSearch } = this.props;
    return (
      <div>
        {withSearch ? this.withSearch() : this.withOutSearch() }
      </div>
    );
  }
}

Header.propTypes = {
  withSearch: PropTypes.bool,
  pageTitle: PropTypes.string,
}.isRequired;

export default Header;
