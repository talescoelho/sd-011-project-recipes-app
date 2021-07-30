import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
    };
    this.centralHeader = this.centralHeader.bind(this);
    this.profileButton = this.profileButton.bind(this);
    this.searchButton = this.searchButton.bind(this);
    this.showSearch = this.showSearch.bind(this);
  };

  profileButton() {
    return (
      <Link to="/perfil">
        <button
          type="button"
          data-testid="profile-top-btn"
        >
          <img src="./images/profileIcon.svg" alt="profileIcon" />
        </button>
      </Link>
    );
  }

  searchButton() {
    return (
      <button
        type="button"
        data-testids="search-top-btn"
        onClick={ () => this.showSearch() }
      >
        <img src="./images/searchIcon.svg" alt="searchIcon" />
      </button>
    );
  }

  showSearch() {
    const { disabled } = this.state;
      if (disabled === true) {
        this.setState({
          disabled: false,
        });
      } else {
        this.setState({
          disabled: true,
        });
      }
    }


  centralHeader() {
const { disabled } = this.state;
const { title } = this.props;
    return (
      <>
        <h1 data-testid="page-title">{ title }</h1>
        { !disabled ? <SearchBar /> : null  }
      </>
    );
  }

  render() {
    return (
      <header>
        { this.profileButton() }
        { this.centralHeader() }
        { this.searchButton() }
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default Header;
