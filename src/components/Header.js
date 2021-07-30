import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      showInput: false,
    };
    this.handleStateOnClick = this.handleStateOnClick.bind(this);
  }

  handleStateOnClick() {
    const { showInput } = this.state;
    this.setState({
      showInput: !showInput,
    });
  }

  render() {
    const { title, showSearchButton } = this.props;
    const { showInput } = this.state;
    return (
      <div>
        <header
          className="header"
        >
          <Link to="/perfil">
            <button
              type="button"
            >
              <img data-testid="profile-top-btn" src={ profileIcon } alt="profile" />
            </button>
          </Link>
          <h3 data-testid="page-title">{ title }</h3>
          {showSearchButton && (
            <button
              type="button"
              onClick={ this.handleStateOnClick }
            >
              <img data-testid="search-top-btn" src={ searchIcon } alt="search" />
            </button>)}
        </header>
        { showInput
          ? (
            <label htmlFor="search">
              <input type="text" data-testid="search-input" />
            </label>
          ) : <div />}
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;
