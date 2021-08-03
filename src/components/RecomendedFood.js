import React from 'react';
import PropTypes from 'prop-types';

function RecomendedFood(props) {
  const { category, title, img, dataTestid } = props;
  return (
    <div data-testid={ dataTestid } className="recommendedFoodContainer">
      <img src={ img } alt="imagem de um drink" className="recommendedImage" />
      <h3>{ category }</h3>
      <h2>{ title }</h2>
    </div>
  );
}

RecomendedFood.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default RecomendedFood;
