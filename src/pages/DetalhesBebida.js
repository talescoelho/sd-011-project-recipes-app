import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import RecommendMeal from '../components/RecommendMeal';

export default function DetalhesBebida({ match }) {
  const { id } = match.params;
  const [drink, setDrink] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const cardLimit = 6;

  useEffect(() => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then((response) => {
        response.json()
          .then((data) => {
            setDrink(data.drinks[0]);
          });
      });
  }, [id]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => {
        response.json()
          .then(({ meals }) => setRecommendations(meals.slice(0, cardLimit)));
      });
  }, []);

  let ingredientsKeys = [];
  if (drink.strIngredient1) {
    // filtra as chaves dos ingredientes
    ingredientsKeys = Object.keys(drink)
      .filter((key) => key.match(/strIngredient/) && drink[key]);
    // remove os ingredientes que tem valor ""(string vazia)
    ingredientsKeys = ingredientsKeys.filter((key) => drink[key].trim() !== '');
  }

  const loading = !drink.idDrink && recommendations.length > 0;
  return (
    loading
      ? <h1>Carregando....</h1>
      : (
        <div>
          <img
            data-testid="recipe-photo"
            alt=""
            src={ drink.strDrinkThumb }
            width="150px"
          />
          <p data-testid="recipe-title">{drink.strDrink}</p>
          <button
            data-testid="share-btn"
            type="button"
          >
            Compartilhar
          </button>
          <button
            data-testid="favorite-btn"
            type="button"
          >
            Favoritar
          </button>
          <p data-testid="recipe-category">{drink.strAlcoholic}</p>
          <div>
            <p>Ingredientes:</p>
            {
              ingredientsKeys.map((ingredient, index) => {
                const measure = `- ${drink[`strMeasure${index + 1}`]}` || '';
                return (
                  <p
                    key={ index }
                    data-testid={ `${index}-ingredient-name-and-measure` }
                  >
                    {`${drink[ingredient]} ${measure}`}
                  </p>
                );
              })
            }
          </div>
          <p data-testid="instructions">{drink.strInstructions}</p>
          <RecommendMeal items={ recommendations } />
          <Link to="/">
            <button data-testid="start-recipe-btn" type="button">Iniciar receita</button>
          </Link>
        </div>
      )
  );
}

DetalhesBebida.propTypes = {
  match: {
    params: {
      id: PropTypes.number,
    },
  },
}.isRequired;
