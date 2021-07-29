import React, { Component } from 'react';
import PropTypes from 'prop-types';
import profilePicture from '../images/profileIcon.svg';

export default class HeaderWithoutSearch extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <button type="button" className="profilePicture">
          <img data-testid="profile-top-btn" src={ profilePicture } alt="profileIcon" />
        </button>
        <h1 data-testid="page-title">{ title }</h1>
      </div>
    );
  }
}

HeaderWithoutSearch.propTypes = {
  title: PropTypes.string.isRequired,
};
