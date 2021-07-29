import React, { Component } from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../images/searchIcon.svg';
import profilePicture from '../images/profileIcon.svg';

export default class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <button type="button" className="profilePicture">
          <img data-testid="profile-top-btn" src={ profilePicture } alt="profileIcon" />
        </button>
        <h1 data-testid="page-title">{ title }</h1>

        <button type="button" className="searchButton">
          <img data-testid="search-top-btn" src={ searchIcon } alt="searchIcon" />
        </button>

      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
