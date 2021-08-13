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
  }, [recipe]);

  const history = useHistory();

  const HandleRedirect = (recipeId) => {
    if (recipes.area) history.push(`comidas/${recipeId}`);
    history.push(`bebidas/${recipeId}`);
  };

  const handleShareBtn = (recipeType = 'comida', recipeId) => {
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
        src={ recipes.imgUrl }
        alt="Recipe"
        data-testid={ `${index}-horizontal-image` }
        onClick={ () => HandleRedirect(recipes.id) }
        aria-hidden="true"
      />
      <div className="RecipeInfoConcluded">
        <span data-testid={ `${index}-horizontal-top-text` }>
          { recipes.area ? recipes.area : '' }
          { ' - ' }
          { recipes.area ? recipes.category : recipes.strAlcoholic }

        </span>
        <p
          className="RecipesFoodName"
          data-testid={ `${index}-horizontal-name` }
        >
          { recipes.title }
        </p>
        <p
          data-testid={ `${index}-horizontal-done-date` }
          className="doneDate"
        >
          Feita em:
          {/* { doneDate } */}
        </p>
        <div className="tagContainer">
          { console.log(recipes)}
          { console.log(recipes.area)}
          { recipes.area && recipes.tags !== null ? (
            recipes.tags.split().map((tagName, key) => (
              <p
                className="tagName"
                key={ key }
                data-testid={ `${index}-${tagName}-horizontal-tag` }
              >
                { tagName }
              </p>))
          ) : '' }
        </div>
        <button
          className="shareBTN"
          type="button"
          data-testid={ `${index}-horizontal-share-btn` }
          onClick={ () => {
            handleShareBtn(recipes.area, recipes.id); handleLinkMessage();
          } }
        >
          <img src={ shareImage } alt="Compartilhar" />
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
