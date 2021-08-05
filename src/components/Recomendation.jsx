import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import Carousel from 'react-bootstrap/Carousel'; https://react-bootstrap.github.io/components/carousel/#carousel-item-props
import '../styles/carousel.css';

export default function Recomendation({ foodOrDrink }) {
  const [recomendation, setRecomendation] = useState([]);

  async function fetchRecomendedItem() {
    let endPoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    if (foodOrDrink === 'Bebidas') {
      endPoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    }
    const request = await fetch(endPoint);
    const response = await request.json();
    const data = foodOrDrink === 'Bebidas' ? response.meals : response.drinks;
    setRecomendation(data);
  }

  useEffect(() => {
    fetchRecomendedItem();
  }, []);

  console.log('stateRec', recomendation);
  const maxLength = 6;

  function renderRecomendations(item, index) {
    return (
      <div
        key={ index }
        data-testid={ `${index}-recomendation-card` }
        className="recomendationItem"
      >
        <img
          data-testid="recomendation-photo"
          src={ foodOrDrink === 'Bebidas' ? item.strMealThumb : item.strDrinkThumb }
          alt="image_of_recipe"
          className="recomendationImg"
        />

        <h4 data-testid={ `${index}-recomendation-title` }>
          { foodOrDrink === 'Bebidas' ? item.strMeal : item.strDrink }
        </h4>
      </div>
    );
  }

  return (
    <div>
      {recomendation.length === 0 ? <span>Carregando...</span> : (
        <div>
          <h3>Recomendations</h3>
          <section className="containerRecomendation">
            {recomendation.filter((_, index) => index < maxLength)
              .map(renderRecomendations)}
          </section>
        </div>)}
    </div>
  );
}

Recomendation.propTypes = {
  foodOrDrink: PropTypes.string.isRequired,
};
