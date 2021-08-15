import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShareButton from '../Components/ShareButton';
import FavoriteButton from '../Components/FavoriteButton';
import checkInProgress from '../Services/checkInProgress';
import RecomendedRecipes from '../Components/RecomendedRecipes';
// import './Styles/detailsrecipe.css';

function DrinkDetails({ match: { params: { id } }, location: { pathname } }) {
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

  // retorna a concatenação ingredients com measures
  const concatIngredientWithMesure = () => {
    const ingredients = [];
    const arrayIndredients = Object.keys(recipes)
      .filter((item) => item
        .includes('strIngredient'));
    arrayIndredients.forEach((key) => {
      if (recipes[key]) {
        ingredients.push(recipes[key]);
      }
    });
    const measures = [];
    const arrayMeasures = Object.keys(recipes)
      .filter((item) => item
        .includes('strMeasure'));

    arrayMeasures.forEach((key) => {
      if (recipes[key]) {
        measures.push(recipes[key]);
      }
    });
    const newArray = [];
    for (let index = 0; index < ingredients.length; index += 1) {
      newArray.push(`-${ingredients[index]} - ${measures[index]}`);
    }
    return newArray;
  };
  const essaPagina = pathname;

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
      <FavoriteButton
        id={ recipes.idDrink }
        type="bebida"
        area=""
        category="Cocktail"
        alcoholicOrNot={ recipes.strAlcoholic }
        name={ recipes.strDrink }
        image={ recipes.strDrinkThumb }
      />
      <h3 data-testid="recipe-category">
        {recipes.strCategory && recipes.strAlcoholic}
      </h3>
      <h3>Ingredients</h3>
      <ul>
        { concatIngredientWithMesure()
          .map((igredient, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {igredient}
            </li>)) }
      </ul>
      <h3 data-testid="instructions">{recipes.strInstructions}</h3>
      <div id="recommended"><RecomendedRecipes origem={ essaPagina } /></div>
      <Link to={ `/bebidas/${recipes.idDrink}/in-progress` } params={ recipes.idDrink }>
        <button
          id="start-recipe-btn"
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
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default DrinkDetails;
