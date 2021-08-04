import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import Carousel from 'react-bootstrap/Carousel'; https://react-bootstrap.github.io/components/carousel/#carousel-item-props
import '../styles/carousel.css';

export default function Recomendation({ foodOrDrink }) {
  const [recomendation, setRecomendation] = useState([]);

  async function fetchRecomendedDrinks() {
    const endPoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const request = await fetch(endPoint);
    const response = await request.json();
    const data = response.drinks;
    setRecomendation(data);
    console.log('recomendationDrinks', data);
  }

  async function fetchRecomendedMeals() {
    const endPoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const request = await fetch(endPoint);
    const response = await request.json();
    const data = response.meals;
    setRecomendation(data);
    console.log('recomendationComidas', data);
  }

  useEffect(
    () => {
      if (foodOrDrink === 'Comidas') {
        return fetchRecomendedDrinks();
      }
      return fetchRecomendedMeals();
    }, [foodOrDrink],
  );

  console.log('stateRec', recomendation);
  const maxLength = 6;

  function renderDrinksRecomendations(item, index) {
    return (
      <div
        key={ index }
        data-testid={ `${index}-recomendation-card` }
        className="recomendationItem"
      >
        <img
          data-testid="recomendation-photo"
          src={ item.strDrinkThumb }
          alt="image_of_recipe"
          className="recomendationImg"
        />

        <h4 data-testid={ `${index}-recomendation-title` }>
          { item.strDrink }
        </h4>
      </div>
    );
  }

  function renderMealsRecomendations(item, index) {
    return (

      <div
        key={ index }
        data-testid={ `${index}-recomendation-card` }
        className="recomendationItem"
      >
        <img
          data-testid="recomendation-photo"
          src={ item.strMealThumb }
          alt="image_of_recipe"
          className="recomendationImg"
        />

        <h4 data-testid={ `${index}-recomendation-title` }>
          { item.strMeal }
        </h4>
      </div>

    );
  }

  if (recomendation.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <h3>Recomendations</h3>
      <section className="containerRecomendation">
        {recomendation.filter((_, index) => index < maxLength)
          .map(foodOrDrink === 'Comidas'
            ? renderDrinksRecomendations : renderMealsRecomendations)}
      </section>
    </div>);
}

Recomendation.propTypes = {
  foodOrDrink: PropTypes.string.isRequired,
};
