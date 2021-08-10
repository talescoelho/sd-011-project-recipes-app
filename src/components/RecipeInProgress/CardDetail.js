import React from 'react';
import PropTypes from 'prop-types';

export default function CardDetail(props) {
  const { thumb, id, name, category } = props;
  return (
    <>
      <img
        src={ thumb }
        alt={ id }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{ name }</h1>
      <p data-testid="recipe-category">{ category }</p>
    </>
  );
}

CardDetail.propTypes = {
  thumb: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
}.isRequired;
