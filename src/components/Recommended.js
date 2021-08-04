import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Recommended({ value, type }) {
  const MAX_CARDS = 6;
  const sixCards = value.map((e) => e).slice(0, MAX_CARDS);
  console.log(sixCards);
  const kind = () => {
    if (type === 'meal') {
      return (
        Object.entries(sixCards).map((e, i) => (
          <div data-testid={ `${i}-recomendation-card` } key={ i }>
            <img width="100px" src={ e[1].strMealThumb } alt={ `img ${e[1].strMeal}` } />
            <div>{ e[1].strMeal }</div>
          </div>
        ))
      );
    }
    return (
      Object.entries(sixCards).map((e, i) => (
        <div data-testid={ `${i}-recomendation-card` } key={ i }>
          <img width="100px" src={ e[1].strDrinkThumb } alt={ `img ${e[1].strDrink}` } />
          <div>{ e[1].strDrink }</div>
        </div>
      ))
    );
  };

  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <div style={ { textAlign: '-webkit-center' } }>
      <Slider { ...settings }>
        {
          kind()
        }
      </Slider>
    </div>
  );
}

export default Recommended;

Recommended.propTypes = {
  value: PropTypes.string,
  data: PropTypes.string,
}.isRequired;
