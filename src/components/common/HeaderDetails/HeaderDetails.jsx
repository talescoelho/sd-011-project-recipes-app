import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import shareIcon from '../../../images/shareIcon.svg';
import whiteHeartIcon from '../../../images/whiteHeartIcon.svg';
import './HeaderDetails.css';

const HeaderDetails = (
  {
    thumb,
    alt,
    category,
  },
) => (
  <header>
    {
      thumb
        ? (
          <img
            className="thumbMeal-style"
            src={ thumb }
            alt={ `showing ${alt} product` }
            data-testid="recipe-photo"
          />
        )
        : <h1>Carregando</h1>
    }
    <h4 data-testid="recipe-title">{ alt }</h4>
    <h6 data-testid="recipe-category">{ category }</h6>
    <Link to="/">
      <img
        data-testid="share-btn"
        src={ shareIcon }
        alt="Icon to share foods"
      />
    </Link>
    <Link to="/">
      <img
        data-testid="favorite-btn"
        src={ whiteHeartIcon }
        alt="Icon to favorite foods"
      />
    </Link>
  </header>
);

HeaderDetails.propTypes = ({
  thumb: PropTypes.img,
  alt: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
}).isRequired;

export default connect()(HeaderDetails);
