import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import ShareImage from '../images/shareIcon.svg';

import LinkCopy from './LinkCopy';
import '../styles/RecipeConcluded.css';
import ButtonShare from './ButtonShare';

function RecipeConcluded({ recipe, index }) {
  const [linkCopy, setLinkCopy] = useState(false);
  const [recipes, setRecipes] = useState(recipe);
  const recipeType = recipe.type === 'comida' ? 'meals' : 'cocktails';
  const recipeId = recipe.id;

  useEffect(() => {
    setRecipes(recipe);
  }, [recipe]);


  const history = useHistory();

  const HandleRedirect = (recipeId, recipeType) => {
    if (recipeType === 'meals') history.push(`comidas/${recipeId}`);
    if (recipeType === 'cocktails') history.push(`bebidas/${recipeId}`);
  };

  return (
    <div className="RecipeConcludedContainer">
      <div
        onClick={ () => HandleRedirect(recipes.id, recipeType) }
        aria-hidden="true"
      >
        <img
          src={ recipes.image }
          alt="Recipe"
          data-testid={ `${index}-horizontal-image` }
        />
      </div>
      <div className="RecipeInfoConcluded">
        <span data-testid={ `${index}-horizontal-top-text` }>
          { recipes.type === 'comida' ? recipes.area : '' }
          { ' - ' }
          { recipes.type === 'comida' ? recipes.category : recipes.alcoholicOrNot }

        </span>
        <p
          className="RecipesFoodName"
          data-testid={ `${index}-horizontal-name` }
          onClick={ () => HandleRedirect(recipes.id, recipeType) }
          aria-hidden="true"
        >
          { recipes.name }
        </p>
        <p
          data-testid={ `${index}-horizontal-done-date` }
          className="doneDate"
        >
          Feita em:
          { recipes.doneDate }
        </p>
        <div className="tagContainer">
          {/* {console.log(recipes.area, 'tags para renderizar', recipeTags)} */}
          { recipes.type === 'comida' && recipes.tags !== [] ? (
            recipes.tags.map((tagName, key) => (
              <p
                className="tagName"
                key={ key }
                data-testid={ `${index}-${tagName}-horizontal-tag` }
              >
                { tagName }
              </p>))
          ) : '' }
        </div>
        <ButtonShare
          recipe={ { recipeType, recipeId } }
          index={ index }
        />
      </div>
    </div>
  );
}

RecipeConcluded.propTypes = {
  recipe: PropTypes.objectOf(String),
  index: PropTypes.number,
}.isRequired;

export default RecipeConcluded;
