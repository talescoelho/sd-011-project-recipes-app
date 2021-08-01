import React from 'react';
import PropTypes from 'prop-types';
import { Carousel, CarouselItem } from 'react-bootstrap';

const SIX_CARDS = 6;

function CarouselRecipes({ data, recipeType }) {
  const thumbType = recipeType === 'meals' ? 'strMealThumb' : 'strDrinkThumb';
  return (
    <div>
      <Carousel>
        {data.map((recipe, index) => {
          if (index < SIX_CARDS) {
            return (
              <CarouselItem key={ index } data-testid={ `${index}-recomendation-card` }>
                <img
                  alt="First slide"
                  src={ recipe[thumbType] }
                />
              </CarouselItem>
            );
          }
          return '';
        })}
      </Carousel>
    </div>
  );
}

CarouselRecipes.propTypes = {
  data: PropTypes.array,
}.isRequired;

export default CarouselRecipes;
