import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import '../styles/RecipeConcluded.css';
import LinkCopy from './LinkCopy';

function RecipeConcluded({ recipe, index }) {
  const [linkCopy, setLinkCopy] = useState(false);
  const [recipes, setRecipes] = useState(recipe);

  useEffect(() => {
    setRecipes(recipe);
    console.log('aqui', recipe.name);
  }, [recipe]);

  const history = useHistory();

  const HandleRedirect = (recipeId) => {
    if (recipes.type === 'comida') history.push(`comidas/${recipeId}`);
    if (recipes.type === 'bebida') history.push(`bebidas/${recipeId}`);
  };

  const handleShareBtn = (recipeType, recipeId) => {
    const hostURL = window.location.host;
    if (recipeType === 'comida') {
      navigator.clipboard.writeText(`${hostURL}/comidas/${recipeId}`);
    }
    if (recipeType === 'bebida') {
      navigator.clipboard.writeText(`${hostURL}/bebidas/${recipeId}`);
    }
    return <LinkCopy />;
  };

  const handleLinkMessage = () => {
    setLinkCopy(true);
  };

  return (
    <div className="RecipeConcludedContainer">
      <img
        src={ recipes.image }
        alt="Recipe"
        data-testid={ `${index}-horizontal-image` }
        onClick={ () => HandleRedirect(recipes.id) }
        aria-hidden="true"
      />
      <div className="RecipeInfoConcluded">
        <span data-testid={ `${index}-horizontal-top-text` }>
          { recipes.type === 'comida' ? recipes.area : '' }
          { ' - ' }
          { recipes.type === 'comida' ? recipes.category : recipes.alcoholicOrNot }

        </span>
        <p
          className="RecipesFoodName"
          data-testid={ `${index}-horizontal-name` }
        >
          { recipes.name }
        </p>
        <p
          data-testid={ `${index}-horizontal-done-date` }
          className="doneDate"
        >
          Feita em:
          {/* { doneDate } */}
        </p>
        <div className="tagContainer">
          { recipes.type === 'comida' && recipes.tags.length > 0 ? (
            recipes.tags.map((tagName, key) => (
              <p
                className="tagName"
                key={ key }
                data-testid={ `${index}-${recipes.tagName}-horizontal-tag` }
              >
                { recipes.tagName }
              </p>))
          ) : '' }
        </div>
        <button
          className="shareBTN"
          type="button"
          data-testid={ `${index}-horizontal-share-btn` }
          onClick={ () => {
            handleShareBtn(recipes.type, recipes.id);
            handleLinkMessage();
          } }
        >
          <img src={ recipes.shareImage } alt="Compartilhar" />
        </button>
        { linkCopy && <LinkCopy /> }
      </div>
    </div>
  );
}

RecipeConcluded.propTypes = {
  recipe: PropTypes.objectOf(String),
  index: PropTypes.number,
}.isRequired;

export default RecipeConcluded;
