import React, { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Recommended({ value, type }) {
  const sixCards = value.map((e) => e).slice(0, 6);
  console.log(sixCards);
  const kind = () => {
    if (type === "meal") {
      return (
        Object.entries(sixCards).map((e, i) => {
            return (
              <div data-testid={`${i}-recomendation-card`} key={i}>
                <img width="100px" src={e[1].strMealThumb} alt={`img ${e[1].strMeal}`} />
                <div>{ e[1].strMeal }</div>
              </div>
            );
          })
      );
    }
    return (
      Object.entries(sixCards).map((e, i) => {
            return (
              <div data-testid={`${i}-recomendation-card`} key={i}>
                <img width="100px" src={e[1].strDrinkThumb} alt={`img ${e[1].strDrink}`} />
                <div>{ e[1].strDrink }</div>
              </div>
            );
          })
    );
  }

  const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true
    };

  return (
    <div style={ {textAlign: '-webkit-center'} }>
      <Slider {...settings}>
        {
          kind()
        }
      </Slider>
    </div>
  );
}

export default Recommended;