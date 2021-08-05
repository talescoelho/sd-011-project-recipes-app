import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Recommended({ value, type, min }) {
  console.log(min);
  const sixCards = value.map((e) => e).slice(min, min+6);
  console.log(sixCards);
  const kind = () => {
    if (type === "meal") {
      return (
        Object.entries(sixCards).map((e, i) => {
          return (
            <a href={`/comidas/${e[1].idMeal}`}>
              <div data-testid={`${i}-recomendation-card`} key={i}>
                <img width="100px" src={e[1].strMealThumb} alt={`img ${e[1].strMeal}`} />
                <div>{ e[1].strMeal }</div>
              </div>
            </a>
          );
        })
      );
    }
    return (
      Object.entries(sixCards).map((e, i) => {
        return (
          <Link to={`/comidas/${e[1].idDrink}`}>
            <div data-testid={`${i}-recomendation-card`} key={i}>
              <img width="100px" src={e[1].strDrinkThumb} alt={`img ${e[1].strDrink}`} />
              <div>{ e[1].strDrink }</div>
            </div>
          </Link>
        );
      })
    );
  }

  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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