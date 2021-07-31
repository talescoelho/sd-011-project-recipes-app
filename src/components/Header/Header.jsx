import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import searchIcon from '../../images/searchIcon.svg';
import profileIcon from '../../images/profileIcon.svg';
import './header.css';

// const Other = () => {
//   const [showField, setShowField] = useState(false);
// };

const Header = ({ page, showSearchBtn }) => {
  const [showField, setShowField] = useState(false);
  return (
    <>
      <header className="header-style">
        <Link to="/perfil">
          <img
            src={ profileIcon }
            alt="profile icon"
            data-testid="profile-top-btn"
          />
        </Link>
        <h3 data-testid="page-title">{page}</h3>
        {
          (showSearchBtn)
            ? (
              <button
                type="button"
                onClick={ () => setShowField((show) => !show) }
              >
                <img
                  src={ searchIcon }
                  alt="research magnifying glass"
                  data-testid="search-top-btn"
                />
              </button>) : null
        }
      </header>
      <span>
        {
          showField
            ? (<input type="text" data-testid="search-input" />)
            : null
        }
      </span>
    </>
  );
};

Header.propTypes = ({
  page: PropTypes.string,
  showSearchBtn: PropTypes.bool,
}).isRequired;

export default connect()(Header);
