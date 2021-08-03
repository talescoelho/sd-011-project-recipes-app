import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../images/shareIcon.svg';
import '../images/whiteHeartIcon.svg';
import RecomendedFood from '../components/RecomendedFood';

function ReceitaDeComida(props) {
  const { match: { params: { id } } } = props;
  const [recipeDataAsObject, setRecipeDataAsObject] = React.useState([]);
  const [recomendedDrink, setRecomendedDrink] = React.useState([]);

  async function fetchMealRecipe() {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await fetch(url);
    const result = await response.json();
    setRecipeDataAsObject(...result.meals);
  }

  async function fetchRecomendedDrink() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(url);
    const result = await response.json();
    setRecomendedDrink(result.drinks);
  }

  useEffect(() => {
    fetchMealRecipe();
    fetchRecomendedDrink();
  }, []);

  console.log(recomendedDrink);

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

  const videoUrlPosition = 19;
  const numberOfRecomendedDrinks = 6;

  const {
    strMeal, strCategory, strMealThumb, strInstructions, strYoutube,
  } = recipeDataAsObject;

  if (!recipeDataAsObject) return <h2>Loading...</h2>;
  return (
    <div>
      <img data-testid="recipe-photo" src={ strMealThumb } alt="imagem de comida" />
      <h2 data-testid="recipe-title">{strMeal}</h2>
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
      <h5 data-testid="recipe-category">{strCategory}</h5>
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
      {strYoutube && <iframe src={ `https://youtube.com/embed/${strYoutube.substr(videoUrlPosition)}` } title="video" data-testid="video" />}
      <h3>Receitas Recomendadas</h3>
      {recomendedDrink
        .slice(0, numberOfRecomendedDrinks)
        .map((obj, index) => (
          <RecomendedFood
            dataTestid={ `${index}-recomendation-card` }
            key={ index }
            category={ obj.strCategory }
            title={ obj.strDrink }
            img={ obj.strDrinkThumb }
          />))}
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </div>
  );
}

ReceitaDeComida.propTypes = {
  match: PropTypes.objectOf.isRequired,
};

export default ReceitaDeComida;
