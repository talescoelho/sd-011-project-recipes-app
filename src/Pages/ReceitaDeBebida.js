import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../images/shareIcon.svg';
import '../images/whiteHeartIcon.svg';
import RecomendedFood from '../components/RecomendedFood';

function ReceitaDeBebida(props) {
  const { match: { params: { id } } } = props;
  const [recipeDataAsObject, setRecipeDataAsObject] = React.useState([]);
  const [recomendedMeal, setRecomendedMeal] = React.useState([]);

  async function fetchDrinkRecipe() {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await fetch(url);
    const result = await response.json();
    setRecipeDataAsObject(...result.drinks);
  }

  async function fetchRecomendedMeal() {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(url);
    const result = await response.json();
    setRecomendedMeal(result.meals);
  }

  useEffect(() => {
    fetchDrinkRecipe();
    fetchRecomendedMeal();
  }, []);

  function setIgredientAndMeasureList() {
    const igredientStartPoint = 9;
    const igredientEndPoint = 28;
    const measureStartPoint = 29;
    const measureEndPoint = 48;

    const igredientAndMeasureList = [];

    const igredients = Object.values(recipeDataAsObject)
      .slice(igredientStartPoint, igredientEndPoint)
      .filter((igredient) => igredient !== '' && igredient !== null);

    const measures = Object.values(recipeDataAsObject)
      .slice(measureStartPoint, measureEndPoint)
      .filter((measure) => measure !== '' && measure !== null);

    for (let i = 0; i < igredients.length; i += 1) {
      igredientAndMeasureList.push(`${igredients[i]} - ${measures[i]}`);
    }
    return igredientAndMeasureList;
  }

  const numberOfRecomendedMeals = 6;

  const {
    strDrink, strAlcoholic, strDrinkThumb, strInstructions,
  } = recipeDataAsObject;

  if (!recipeDataAsObject) return <h2>Loading...</h2>;
  return (
    <div>
      <img data-testid="recipe-photo" src={ strDrinkThumb } alt="imagem de comida" />
      <h2 data-testid="recipe-title">{strDrink}</h2>
      <img
        data-testid="share-btn"
        src="../images/shareIcon.svg"
        alt="botão para compartilhar a receita"
      />
      <img
        data-testid="favorite-btn"
        src="../images/whiteHeartIcon.svg"
        alt="botão para favoritar a receita"
      />
      <h5 data-testid="recipe-category">{strAlcoholic}</h5>
      <h3>Igredientes</h3>
      <ol>
        {setIgredientAndMeasureList()
          .map((igrediente, index) => (
            <li data-testid={ `${index}-ingredient-name-and-measure` } key={ index }>
              {igrediente}
            </li>
          ))}
      </ol>
      <h3 data-testid="instructions">Instruções</h3>
      <p>{ strInstructions }</p>
      <h3>Receitas Recomendadas</h3>
      <div className="RecommendedContainer">
        {recomendedMeal
          .slice(0, numberOfRecomendedMeals)
          .map((obj, index) => (
            <RecomendedFood
              dataTestid={ `${index}-recomendation-card` }
              key={ index }
              category={ obj.strCategory }
              title={ obj.strMeal }
              img={ obj.strMealThumb }
            />))}
      </div>
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </div>
  );
}

ReceitaDeBebida.propTypes = {
  match: PropTypes.objectOf.isRequired,
};

export default ReceitaDeBebida;
