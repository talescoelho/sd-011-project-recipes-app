import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import searchIcon from '../images/searchIcon.svg';
import profilePicture from '../images/profileIcon.svg';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputLoading: false,
    };
  }

  render() {
    const { title } = this.props;
    const { inputLoading } = this.state;

    return (
      <div>
        <Link to="/perfil" className="profilePicture">
          <img data-testid="profile-top-btn" src={ profilePicture } alt="profileIcon" />
        </Link>
        <h1 data-testid="page-title">{ title }</h1>

        <button
          type="button"
          className="searchButton"
          onClick={ () => (!inputLoading ? (this.setState({ inputLoading: true }))
            : (
              this.setState({ inputLoading: false }))) }
        >
          <img data-testid="search-top-btn" src={ searchIcon } alt="searchIcon" />
        </button>
        { inputLoading && (
          <input data-testid="search-input" type="text" placeholder="Procure Aqui" />
        )}

      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
