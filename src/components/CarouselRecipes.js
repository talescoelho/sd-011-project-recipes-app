import React from 'react';
import PropTypes from 'prop-types';
import { Carousel, CarouselItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SIX_CARDS = 6;

function CarouselRecipes({ data, recipeType }) {
  const thumbType = recipeType === 'meals' ? 'strMealThumb' : 'strDrinkThumb';
  const urlType = recipeType === 'meals' ? 'comidas' : 'bebidas';
  const idType = recipeType === 'meals' ? 'idMeal' : 'idDrink';
  const titleType = recipeType === 'meals' ? 'strMeal' : 'strDrink';
  return (
    <div>
      <Carousel>
        {data.map((recipe, index) => {
          if (index < SIX_CARDS && index % 2 === 0) {
            return (
              <CarouselItem key={ index }>
                <Link to={ `/${urlType}/${recipe[idType]}` }>
                  <img
                    alt="First slide"
                    src={ recipe[thumbType] }
                    data-testid={ `${index}-recomendation-card` }
                  />
                  <span data-testid={ `${index}-recomendation-title` }>
                    {recipe[titleType]}
                  </span>
                </Link>
                <Link to={ `/${urlType}/${data[index + 1][idType]}` }>
                  <img
                    alt="First slide"
                    src={ data[index + 1][thumbType] }
                    data-testid={ `${index + 1}-recomendation-card` }
                  />
                  <span data-testid={ `${index + 1}-recomendation-title` }>
                    {data[index + 1][titleType]}
                  </span>
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
