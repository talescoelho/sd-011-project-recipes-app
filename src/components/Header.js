import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/perfil">
          <button type="button">
            <img src={ profileIcon } alt="profileIcon" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h1 data-testid="page-title">Comidas</h1>
        <button
          onClick={ () => <SearchBar /> }
          type="button"
        >
          <img src={ searchIcon } alt="searchIcon" data-testid="search-top-btn" />
        </button>
      </header>
    );
  }
}

export default withRouter(Header);
