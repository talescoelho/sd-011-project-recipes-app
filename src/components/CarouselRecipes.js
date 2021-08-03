import React from 'react';
import PropTypes from 'prop-types';
import { Carousel, CarouselItem, Card } from 'react-bootstrap';
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
                  <Card style={ { width: '18rem' } }>
                    <Card.Img
                      variant="top"
                      data-testid={ `${index}-recomendation-card` }
                      src={ recipe[thumbType] }
                    />
                    <Card.Body>
                      <Card.Title
                        data-testid={ `${index}-recomendation-title` }
                      >
                        {recipe[titleType]}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
                <Link to={ `/${urlType}/${data[index + 1][idType]}` }>
                  <Card style={ { width: '18rem' } }>
                    <Card.Img
                      variant="top"
                      data-testid={ `${index + 1}-recomendation-card` }
                      src={ data[index + 1][thumbType] }
                    />
                    <Card.Body>
                      <Card.Title
                        data-testid={ `${index + 1}-recomendation-title` }
                      >
                        {data[index + 1][titleType]}
                      </Card.Title>
                    </Card.Body>
                  </Card>
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
