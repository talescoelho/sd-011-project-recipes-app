import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ShareFavBtn from '../components/ShareFavBtn';

export default function ReceitaComidaPage(props) {
  const [foodDetails, setFoodDetails] = useState();
  const location = useLocation();
  const FOOD_DETAILS_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const ingredients = [
    'white flour',
    'salt',
    'yeast',
    'butter',
  ];

  const recommendedRecipes = [
    'receita 1',
    'receita 2',
    'receita 3',
  ];

  useEffect(() => {
    const foodId = location.pathname.split('/')[2];
    fetch(FOOD_DETAILS_URL + foodId)
      .then((response) => response.json())
      .then((data) => setFoodDetails(data));
  }, []);

  function renderFoods() {
    return (
      <div>
        <p>{foodDetails ? foodDetails.idMeal : ''}</p>
        <img
          src={ foodDetails.meals[0].strMealThumb }
          alt="Foto"
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">{ foodDetails.meals[0].strMeal }</h1>
        <ShareFavBtn url={ props.match.url } />
        <h5 data-testid="recipe-category">{ foodDetails.meals[0].strCategory }</h5>

        <div>
          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((name, index) => (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Instructions</h3>
          <p data-testid="instructions">
            Aqui as instruções de como fazer essa receita.
          </p>
        </div>
        <iframe
          src="https://www.youtube.com/embed/DsFpGUXpZVU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; gyroscope; picture-in-picture"
          allowFullScreen
          data-testid="video"
        />
        <div>
          <h3>Receitas recomendadas</h3>
          <ul>
            {recommendedRecipes.map((name, index) => (
              <li
                key={ index }
                data-testid={ `${index}-recomendation-card` }
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
        <Button data-testid="start-recipe-btn">
          Iniciar Receita
        </Button>
      </div>
    );
  }
  return (
    <div>
      { foodDetails ? renderFoods() : <p>Loading...</p> }
    </div>
  );
}
