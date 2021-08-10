import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import ShareFavBtn from '../components/ShareFavBtn';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import '../style/pageDetails.css';

export default function ReceitaComidaPage(props) {
  const [foodDetails, setFoodDetails] = useState();
  const [recomendations, setRecomendations] = useState();
  const location = useLocation();
  const FOOD_DETAILS_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const RECOMENDATIONS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  useEffect(() => {
    const foodId = location.pathname.split('/')[2];
    fetch(FOOD_DETAILS_URL + foodId)
      .then((response) => response.json())
      .then((data) => setFoodDetails(data));
  }, []);

  const ingMax = 15;
  const ingredientsKeys = foodDetails && (
    Object.keys(foodDetails.meals[0]).filter((key) => key.includes('ngredient')));
  const measureKeys = foodDetails && (
    Object.keys(foodDetails.meals[0]).filter((key) => key.includes('easure')));
  const ingredientMap = ingredientsKeys && ingredientsKeys
    .filter((value) => foodDetails.meals[0][value])
    .map((ing, i) => (
      `- ${foodDetails.meals[0][ing]} - ${foodDetails.meals[0][measureKeys[i]]}`
    )).slice(0, ingMax);
  const ingredientFilter = ingredientMap && ingredientMap
    .filter((value) => value !== 'null-null' && value !== '-');

  useEffect(() => {
    fetch(RECOMENDATIONS_URL)
      .then((response) => response.json())
      .then((data) => setRecomendations(data));
  }, []);

  function renderRecomendation() {
    const maxLength = 6;
    return (
      recomendations.drinks.map((recipe, index) => {
        if (index < maxLength) {
          return (
            <Carousel>
              <div
                key={ recipe.strDrink }
                data-testid={ `${index}-recomendation-card` }
              >
                <img
                  src={ recipe.strDrinkThumb }
                  alt={ recipe.strDrink }
                  height="180px"
                  width="180px"
                  data-testid="recipe-photo"
                />
                <p className="legend">{ recipe.strDrink }</p>
              </div>
            </Carousel>
          );
        }
        return null;
      })
    );
  }

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
            { ingredientFilter ? ingredientFilter.map((item, index) => (
              <p
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                { item }
              </p>)) : '' }
          </ul>
        </div>
        <div>
          <h3>Instructions</h3>
          <p data-testid="instructions">
            { foodDetails.meals[0].strInstructions }
          </p>
        </div>
        <object
          src={ foodDetails.meals[0].strYoutube }
          data-testid="video"
          aria-label="meal-video"
          width="400"
          height="300"
        />
        <h3>Receitas recomendadas</h3>
        <div>
          { recomendations ? renderRecomendation() : <p>Loading...</p> }
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
