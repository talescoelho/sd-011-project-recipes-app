import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchInput from './SearchInput';

class Header extends Component {
  render() {
    const { title, lupa } = this.props;
    return (
      <main>
        <Link to="/perfil">
          <button type="button">
            <img data-testid="profile-top-btn" src={ profileIcon } alt="profile" />
          </button>
        </Link>
        <span data-testid="page-title">{ title }</span>
        { lupa === 'desligado' ? null : (
          <button type="button">
            <img data-testid="search-top-btn" src={ searchIcon } alt="lupa" />
          </button>
        )}
        <SearchInput />
      </main>
    );
  }
}

Header.propTypes = {
  title: propTypes.string.isRequired,
  lupa: propTypes.string.isRequired,
};

export default Header;
