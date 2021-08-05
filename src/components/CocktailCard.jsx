import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/IngredientCard.css';

import { searchByIngredient } from '../services';
import RecipesContext from '../context/RecipesContext';

function CocktailCard({ ingredient: { strIngredient1 }, index }) {
  const { setDataRecipes, setJhonata } = useContext(RecipesContext);
  const [clickOnIngredient, setClickOnIngredient] = useState(false);

  const searchRecipesByIngredient = async () => {
    const pathname = '/bebidas';
    const { drinks } = await searchByIngredient(strIngredient1, pathname);
    setJhonata(strIngredient1);
    setDataRecipes(drinks);
    setClickOnIngredient(true);
  };

  return (
    <div
      className="ingredientCardContainer"
      data-testid={ `${index}-ingredient-card` }
      aria-hidden="true"
      onClick={ () => searchRecipesByIngredient() }
    >
      {
        clickOnIngredient === true
          ? <Redirect to="/bebidas" />
          : null
      }
      <img
        className="ingredientImageRecipe"
        src={ `https://www.themealdb.com/images/ingredients/${strIngredient1}.png` }
        alt=" Recipe"
        data-testid={ `${index}-card-img` }
      />
      <p
        data-testid={ `${index}-card-name` }
        className="ingredientNameRecipe"
      >
        {
          strIngredient1
        }
      </p>
    </div>
  );
}

export default CocktailCard;

CocktailCard.propTypes = {
  index: PropTypes.number,
  ingredient: PropTypes.object,
}.isRequired;
