import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Carousel,
  Row,
  Col,
  Image,
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
    <Row className="m-auto" as="nav">
      <Col sm="12" lg="6" className="m-auto">
        <Carousel className="justify-content-center" variant="dark">
          {recomendations.map(({ strMeal, strMealThumb }, index) => (
            <Carousel.Item
              data-testid={ `${index}-recomendation-card` }
              key={ strMeal }
            >
              <Image
                className="recomendation-picture w-100"
                src={ strMealThumb }
                alt="Imagem"
              />
              <Carousel.Caption
                className="d-flex justify-content-center"
                data-testid={ `${index}-recomendation-title` }
              >
                <h3 className="bg-light text-dark p-1 rounded">{strMeal}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  );

  const mealSelector = () => (
    <Row className="m-auto" as="nav">
      <Col sm="12" lg="6" className="m-auto">
        <Carousel className="justify-content-center" variant="dark">
          {recomendations.map(({ strDrink, strDrinkThumb }, index) => (
            <Carousel.Item
              data-testid={ `${index}-recomendation-card` }
              key={ strDrink }
            >
              <Image
                className="recomendation-picture w-100"
                src={ strDrinkThumb }
                alt="Imagem"
              />
              <Carousel.Caption
                className="d-flex justify-content-center"
                data-testid={ `${index}-recomendation-title` }
              >
                <h3 className="bg-light text-dark p-1 rounded">{strDrink}</h3>
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
