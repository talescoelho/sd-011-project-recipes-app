import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import '../styles/IngredientCard.css';

import { searchByIngredient } from '../services';
import RecipesContext from '../context/RecipesContext';

function MealsCard({ ingredient: { strIngredient }, index }) {
  const { setFilteredRecipes } = useContext(RecipesContext);
  const [clickOnIngredient, setClickOnIngredient] = useState(false);

  const searchRecipesByIngredient = async () => {
    const pathname = '/comidas';
    const { meals } = await searchByIngredient(strIngredient, pathname);
    setFilteredRecipes(meals);
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
          ? <Redirect to="/comidas" />
          : null
      }
      <img
        className="ingredientImageRecipe"
        src={ `https://www.themealdb.com/images/ingredients/${strIngredient}.png` }
        alt=" Recipe"
        data-testid={ `${index}-card-img` }
      />
      <p
        data-testid={ `${index}-card-name` }
        className="ingredientNameRecipe"
      >
        {
          strIngredient
        }
      </p>
    </div>
  );
}

export default MealsCard;

MealsCard.propTypes = {
  index: PropTypes.number,
  ingredient: PropTypes.object,
}.isRequired;
