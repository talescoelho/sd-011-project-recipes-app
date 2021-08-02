import React from 'react';
import PropTypes from 'prop-types';
import { Carousel, CarouselItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SIX_CARDS = 6;

function CarouselRecipes({ data, recipeType }) {
  const thumbType = recipeType === 'meals' ? 'strMealThumb' : 'strDrinkThumb';
  const urlType = recipeType === 'meals' ? 'comidas' : 'bebidas';
  const idType = recipeType === 'meals' ? 'idMeal' : 'idDrink';
  return (
    <div>
      <Carousel>
        {data.map((recipe, index) => {
          if (index < SIX_CARDS && index % 2 === 0) {
            return (
              <CarouselItem key={ index } data-testid={ `${index}-recomendation-card` }>
                <Link to={ `/${urlType}/${recipe[idType]}` }>
                  <img
                    alt="First slide"
                    src={ recipe[thumbType] }
                  />
                </Link>
                <Link to={ `/${urlType}/${data[index + 1][idType]}` }>
                  <img
                    alt="First slide"
                    src={ data[index + 1][thumbType] }
                  />
                </Link>
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
