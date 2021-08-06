import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { Card, Carousel } from 'react-bootstrap';
import MyContext from '../context/MyContext';
import './styles/details.css';

function Recommendations() {
  const { allDrinks: { drinks }, allFoods: { foods } } = useContext(MyContext);
  const numberOfCards = 6;
  const { pathname } = useLocation();
  const numberOfVerification = -1;
  const getDrinksDetails = pathname.indexOf('bebidas') > numberOfVerification;

  return getDrinksDetails ? (
    <Card style={ { padding: '10px' } }>
      <Card.Title>Recommendations</Card.Title>
      <Carousel>
        {
          drinks.slice(0, numberOfCards).map(
            (drink, index) => (
              <Carousel.Item
                data-testid={ `${index}-recipe-card` }
                key={ index }
              >
                <Link
                  to={ `/bebidas/${drink.idDrink}` }
                  style={ { textDecoration: 'none' } }
                >
                  <img
                    className="d-block w-100"
                    data-testid={ `${index}-recomendation-card` }
                    src={ drink.strDrinkThumb }
                    alt={ drink.strDrink }
                  />
                  <Carousel.Caption>
                    <h2
                      data-testid="recipe-category"
                      style={ { color: 'darkRed', fontWeight: '800' } }
                    >
                      { drink.strAlcoholic}
                    </h2>
                    <h1
                      data-testid={ `${index}-recomendation-title` }
                      style={ { color: 'darkRed', fontWeight: '600' } }
                    >
                      {drink.strDrink}
                    </h1>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            ),
          )
        }
      </Carousel>
    </Card>
  ) : (
    <Card style={ { padding: '10px' } }>
      <Card.Title>Recommendations</Card.Title>
      <Carousel>
        {
          foods.slice(0, numberOfCards).map(
            (food, index) => (
              <Carousel.Item
                data-testid={ `${index}-recipe-card` }
                key={ index }
              >
                <Link
                  to={ `/comidas/${food.idMeal}` }
                  style={ { textDecoration: 'none' } }
                >
                  <img
                    className="d-block w-100"
                    data-testid={ `${index}-recomendation-card` }
                    src={ food.strMealThumb }
                    alt={ food.strMeal }
                  />
                  <Carousel.Caption>
                    <h2
                      data-testid="recipe-category"
                      style={ { color: 'darkRed', fontWeight: '800' } }
                    >
                      { food.strCategory }
                    </h2>
                    <h1
                      data-testid={ `${index}-recomendation-title` }
                      style={ { color: 'darkRed', fontWeight: '600' } }
                    >
                      {food.strMeal}
                    </h1>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            ),
          )
        }
      </Carousel>
    </Card>
  );
}

export default Recommendations;
