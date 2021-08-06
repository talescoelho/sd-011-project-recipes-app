import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ShareFavBtn from '../components/ShareFavBtn';

export default function ReceitaComidaPage(props) {
  const [foodDetails, setFoodDetails] = useState();
  const [foodIngredients, setFoodIngredients] = useState();
  const [foodRecomendations, setFoodRecomendations] = useState();
  const location = useLocation();
  const FOOD_DETAILS_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const FOOD_RECOMENDATION_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={id-da-receita}';

  useEffect(() => {
    const foodId = location.pathname.split('/')[2];
    fetch(FOOD_DETAILS_URL + foodId)
      .then((response) => response.json())
      .then((data) => setFoodDetails(data));
  }, []);

  function ingredientsDetailsRender() {
    const array = [];
    const level1 = Object.values(foodDetails);
    const level2 = Object.values(level1[0]);
    Object.keys(level2[0]).forEach((key) => {
      array.push(`${key}: ${level2[0][key]}`);
    });
    const test2 = array.filter((item) => item.includes('strIngredient'));
    const test3 = test2.map((item) => item.split(': ')[1]);
    const test4 = test3.filter((item) => item !== 'null');
    return setFoodIngredients(test4);
  }

  useEffect(() => {
    if (foodDetails) { return ingredientsDetailsRender(); }
  }, [foodDetails]);

  useEffect(() => {
    const foodIdReco = location.pathname.split('/')[2];
    fetch(FOOD_RECOMENDATION_URL + foodIdReco)
      .then((response2) => response2.json())
      .then((data2) => setFoodRecomendations(data2));
      console.log(foodIdReco);
  }, []);
  function renderFoodRecomendation() {
    const maxLength = 6;
    return (
      foodRecomendations.map((recipe, index) => {
        if (index < maxLength) {
          return (
            <div
              key={ recipe.strDrink }
              data-testid={ `${index}-recomendation-card` }
            >
              <img
                src={ recipe.strDrinkThumb }
                alt={ recipe.strDrink }
                height="100px"
                width="100px"
              />
              <h5>{ recipe.strDrink }</h5>
            </div>
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
            { foodIngredients ? foodIngredients.map((item, index) => (
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
            { renderFoodRecomendation() }
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
