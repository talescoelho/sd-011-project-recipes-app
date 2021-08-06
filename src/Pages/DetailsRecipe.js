import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import ShareButton from '../Components/ShareButton';
import './Styles/detailsrecipe.css';

function DetailsRecipe() {
  const [recipes, setRecipes] = useState([]);
  // Didmount - Faz fetch trazendo a receita pelo id e seta o stado recipes com as receita
  useEffect(() => {
    const getApi = async () => {
      const endPoint = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';
      const response = await fetch(endPoint);
      const results = await response.json();
      const meals = results.meals[0];
      setRecipes(meals);
    };
    getApi();
  }, []);
  // retorna o array com os ingredientes
  const ingredientsRecipe = () => {
    const arrayIndredientKids = Object.keys(recipes)
      .filter((item) => item
        .includes('strIngredient'));
    const ingredients = [];
    arrayIndredientKids.forEach((key) => {
      if (recipes[key]) {
        ingredients.push(recipes[key]);
      }
    });
    return ingredients;
  };
  // retorna um array com as medidas de cada ingredientes
  const ingredientsMesure = () => {
    const arrayIndredientKids = Object.keys(recipes)
      .filter((item) => item
        .includes('strMeasure'));
    const ingredients2 = [];
    arrayIndredientKids.forEach((key) => {
      if (recipes[key]) {
        ingredients2.push(recipes[key]);
      }
    });
    return ingredients2;
  };
  // retorna a concatenação do retorno da função ingredientsMesure com ingredientsRecipe
  const concatIngredientWithMesure = () => {
    const newArray = [];
    for (let index = 0; index <= ingredientsRecipe().length; index += 1) {
      newArray.push(`-${ingredientsRecipe()[index]} - ${ingredientsMesure()[index]}`);
    }
    return newArray;
  };

  return (
    <div>
      <img
        className="img-recipe"
        src={ recipes.strMealThumb }
        data-testid="recipe-photo"
        alt="Imagem da receita"
      />
      <h2 data-testid="recipe-title">{ recipes.strMeal }</h2>
      <ShareButton />
      <img src={ whiteHeartIcon } alt="Favoritar Coração" data-testid="favorite-btn" />
      <h3 data-testid="recipe-category">{ recipes.strCategory }</h3>
      <h3>Ingredients</h3>
      <ul>
        { concatIngredientWithMesure()
          .map((igredient, index) => <li key={ index }>{igredient}</li>) }
      </ul>
      <h3 data-testid="instructions">Instructions</h3>
      <p>{recipes.strInstructions}</p>
      <h3 data-testid="video">Video</h3>
      <div>
        <ReactPlayer
          url={ recipes.strYoutube }
        />
      </div>
      {/* <h3 data-testid={ `${index}-recomendation-card"` }>Recomendadas</h3> */}
      <div className="recommended"><h4>oi</h4></div>
      <button
        className="start-recipe-btn"
        type="button"
        data-testid="start-recipe-btn"
      >
        Iniciar Receita
      </button>
    </div>
  );
}

export default DetailsRecipe;
