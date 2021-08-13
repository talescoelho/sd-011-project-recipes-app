import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import ShareButton from '../Components/ShareButton';
import './Styles/DrinkDetails.css';
import checkInProgress from '../Services/checkInProgress';

function DrinkDetails({ match: { params: { id } } }) {
  const [recipes, setRecipes] = useState([]);
  // Didmount - Faz fetch trazendo a receita pelo id e seta o stado recipes com as receita
  useEffect(() => {
    const getApi = async () => {
      const endPoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
      const response = await fetch(endPoint);
      const results = await response.json();
      const drink = results.drinks[0];
      setRecipes(drink);
    };
    getApi();
  }, [id]);
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
    for (let index = 0; index < ingredientsRecipe().length; index += 1) {
      newArray.push(`-${ingredientsRecipe()[index]} - ${ingredientsMesure()[index]}`);
    }
    return newArray;
  };
  checkInProgress();
  const checkStart = () => {
    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgress && Object.keys(inProgress.cocktails)
      .find((key) => key === recipes.idDrink)) {
      return 'Continuar Receita';
    }
    return 'Iniciar Receita';
  };

  return (
    <div>
      <img
        id="img-recipe"
        src={ recipes.strDrinkThumb }
        data-testid="recipe-photo"
        alt="Imagem da receita"
      />
      <h2 data-testid="recipe-title">{ recipes.strDrink }</h2>
      <ShareButton idRecipe={ `bebidas/${recipes.idDrink}` } />
      <img src={ whiteHeartIcon } alt="Favoritar Coração" data-testid="favorite-btn" />
      <h3 data-testid="recipe-category">{ recipes.strCategory }</h3>
      <h3>{ recipes.strAlcoholic }</h3>
      <h3>Ingredients</h3>
      <ul>
        {
          concatIngredientWithMesure()
            .map((igredient, index) => (
              <li
                data-testid={ `${index}-ingredient-name-and-measure` }
                key={ index }
              >
                {igredient}
              </li>
            ))
        }
      </ul>
      <h3>Instructions</h3>
      <p data-testid="instructions">{recipes.strInstructions}</p>
      {/* <h3 data-testid={ `${index}-recomendation-card"` }>Recomendadas</h3> */}
      <div id="recommended"><h4>oi</h4></div>
      <Link
        to={ `/bebidas/${recipes.idDrink}/in-progress` }
        params={ recipes.idDrink }
      >
        <button
          className="start-recipe-btn"
          type="button"
          data-testid="start-recipe-btn"
        >
          { checkStart() }
        </button>
      </Link>
    </div>
  );
}

DrinkDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DrinkDetails;
