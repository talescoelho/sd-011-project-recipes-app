import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function DetailsMealsComp({ propsDrink }) {
  const {
    recipesDetails,
    handleClickCopy,
    handleClickFavorites,
    favorite,
    copyText,
    getIngredients,
    recipesRecommendation,
    setDrinkRecipeId,
    buttonHiddenClass,
    buttonText,
    recipesSelectedId,
    handleClickRecipesProgress,
  } = propsDrink;

  return (
    <div className="containerDetailsFood">
      <img
        className="recipes-img"
        data-testid="recipe-photo"
        alt="recipes-food"
        src={ recipesDetails.strMealThumb }
      />
      <div data-testid="recipe-title" className="h2teste">
        <h2>{ recipesDetails.strMeal }</h2>
        <div className="buttons-share-favorite">
          <button
            data-testid="share-btn"
            type="button"
            onClick={ handleClickCopy }
          >
            <img src={ shareIcon } alt="share" />
          </button>
          <button
            type="button"
            className="buttons-heart-favorite"
            onClick={ handleClickFavorites }
          >
            <img
              data-testid="favorite-btn"
              src={ favorite ? blackHeartIcon : whiteHeartIcon }
              alt="favorite"
            />
          </button>
        </div>
      </div>
      <p>{ copyText }</p>
      <p data-testid="recipe-category">{ recipesDetails.strCategory }</p>

      <h4>Ingredients</h4>
      <div>
        {getIngredients(recipesDetails)}
      </div>
      <h4>Instructions</h4>
      <p data-testid="instructions">{ recipesDetails.strInstructions }</p>
      <video className="video" data-testid="video" width="750" height="500" controls>
        <source width="100" src={ recipesDetails.strYoutube } type="video/mp4" />
        <track src={ recipesDetails.strYoutube } kind="captions" />
      </video>
      <div>
        <h4>Recomendadas</h4>
      </div>
      <section className="recomend-container">
        {
          recipesRecommendation && recipesRecommendation.length && recipesRecommendation
            .filter((_, indexFilter) => indexFilter < '6')
            .map((drinks, index) => (
              <div
                data-testid={ `${index}-recomendation-card` }
                key={ index }
                className=""
              >
                <p>{drinks.strAlcoholic}</p>
                <h4
                  data-testid={ `${index}-recomendation-title` }
                >
                  {drinks.strDrink}
                </h4>
                <Link
                  onClick={ () => setDrinkRecipeId(drinks.idDrink) }
                  to={ `/bebidas/${drinks.idDrink}` }
                >
                  <img
                    className="recomend-img"
                    data-testid={ `${index}-card-img` }
                    src={ drinks.strDrinkThumb }
                    alt={ drinks.strDrink }
                  />
                </Link>
              </div>
            ))
        }
      </section>
      <Link to={ `/comidas/${recipesSelectedId}/in-progress` }>
        <button
          className={ buttonHiddenClass }
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => handleClickRecipesProgress() }
        >
          { buttonText }
        </button>
      </Link>
    </div>
  );
}

DetailsMealsComp.propTypes = {
  propsDrink: PropTypes.shape({
    recipesDetails: PropTypes.objectOf(PropTypes.string),
    handleClickCopy: PropTypes.func,
    handleClickFavorites: PropTypes.func,
    favorite: PropTypes.bool,
    copyText: PropTypes.string,
    getIngredients: PropTypes.func,
    handleClickRecipesProgress: PropTypes.func,
    recipesRecommendation: PropTypes.objectOf(PropTypes.string),
    setRecipeId: PropTypes.func,
    buttonHiddenClass: PropTypes.string,
    buttonText: PropTypes.string,
    setDrinkRecipeId: PropTypes.string,
    recipesSelectedId: PropTypes.string,
  }).isRequired,
};
