import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Carousel,
  Row,
  Col,
} from 'react-bootstrap';
import { fetchRecomendation } from '../../../services/fetchDetailsApi';

export default function DetailsCarousel({ selector }) {
  const [recomendations, setRecomendations] = useState([]);

  useEffect(() => {
    const fetchRecomendations = async () => {
      const getRecomendations = await fetchRecomendation(selector);
      setRecomendations(getRecomendations);
    };
    fetchRecomendations();
  }, [selector]);

  const drinkSelector = () => (
    <Row as="nav">
      <Col className="col-12">
        <Carousel className="m-auto w-85" variant="dark">
          {recomendations.map(({ strMeal, strMealThumb }, index) => (
            <Carousel.Item
              data-testid={ `${index}-recomendation-card` }
              key={ strMeal }
            >
              <img
                className="recomendation-picture"
                src={ strMealThumb }
                alt="Imagem"
              />
              <Carousel.Caption data-testid={ `${index}-recomendation-title` }>
                <h3>{strMeal}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  );

  const mealSelector = () => (
    <Row as="nav">
      <Col className="col-12">
        <Carousel className="m-auto w-85" variant="dark">
          {recomendations.map(({ strDrink, strDrinkThumb }, index) => (
            <Carousel.Item
              data-testid={ `${index}-recomendation-card` }
              key={ strDrink }
            >
              <img
                className="recomendation-picture"
                src={ strDrinkThumb }
                alt="Imagem"
              />
              <Carousel.Caption data-testid={ `${index}-recomendation-title` }>
                <h3>{strDrink}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  );

  return selector === 'meal' ? mealSelector() : drinkSelector();
}

DetailsCarousel.propTypes = {
  selector: PropTypes.string.isRequired,
};
