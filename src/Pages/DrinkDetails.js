import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import ShareButton from '../Components/ShareButton';
import FavoriteButton from '../Components/FavoriteButton';
import RecomendedRecipes from '../Components/RecomendedRecipes';
import './Styles/detailsrecipe.css';

function DrinkDetails(props) {
  const [recipes, setRecipes] = useState([]);
  // Didmount - Faz fetch trazendo a receita pelo id e seta o stado recipes com as receita
  useEffect(() => {
    const getApi = async () => {
      const endPoint = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007';
      const response = await fetch(endPoint);
      const results = await response.json();
      const drink = results.drinks[0];
      setRecipes(drink);
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
  const essaPagina = window.location.href;
  
  return (
    <div>
      <img
        id="img-recipe"
        src={ recipes.strDrinkThumb }
        data-testid="recipe-photo"
        alt="Imagem da receita"
      />
      <h2 data-testid="recipe-title">{ recipes.strDrink }</h2>
      <ShareButton />
      <FavoriteButton
              id={ recipes.idDrink }
              type="bebida"
              area=""
              category="Cocktail"
              alcoholicOrNot={ recipes.strAlcoholic }
              name={ recipes.strDrink }
              image={ recipes.strDrinkThumb }
      />
      
      <h3 data-testid="recipe-category">{ recipes.strCategory }</h3>
      <h3>Ingredients</h3>
      <ul>
        { concatIngredientWithMesure()
          .map((igredient, index) => <li key={ index }>{igredient}</li>) }
      </ul>
      <h3 data-testid="instructions">Instructions</h3>
      <p>{recipes.strInstructions}</p>
      <div id="recommended"><RecomendedRecipes origem = { essaPagina } /></div>
      <button
        id="start-recipe-btn"
        type="button"
        data-testid="start-recipe-btn"
      >
        Iniciar Receita
      </button>
    </div>
  );
}

export default DrinkDetails;
