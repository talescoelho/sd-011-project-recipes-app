import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import ShareImage from '../images/shareIcon.svg';

import LinkCopy from './LinkCopy';
import '../styles/RecipeConcluded.css';

function RecipeConcluded({ recipe, index }) {
  const [linkCopy, setLinkCopy] = useState(false);
  const [recipes, setRecipes] = useState(recipe);
  const [recipeTags, setRecipeTags] = useState(false);

  useEffect(() => {
    setRecipes(recipe);
  }, [recipe]);

  useEffect(() => {
    if (recipes) {
      if (recipes.tags) {
        console.log('tags:', recipes.tags);
        const TAGS = [...recipes.tags];
        setRecipeTags(TAGS);
      }
    }
  }, [recipes]);

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
          {console.log( recipes.area, 'tags para renderizar', recipeTags)}
          { recipes.area && recipeTags !== false ? (
            recipeTags.map((tagName, key) => (
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
          <img src={ ShareImage } alt="Compartilhar" />
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
