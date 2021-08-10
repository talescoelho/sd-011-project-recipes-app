import React, { useState, useContext } from 'react';
import Share from '../images/shareIcon.svg';
import IngredientsFormatter from '../components/ingredientsFormatter';
import handleShareBtn from '../helpers/handleShareBtn';
import ButtonFavoriteRecipe from '../components/ButtonFavoriteRecipe';
import LinkCopy from '../components/LinkCopy';
import RecipesContext from '../context/RecipesContext';

function RecipesInProgress() {
  const { inProgressRecipe } = useContext(RecipesContext);
  const [favorite, setFavorite] = useState();
  const {
    imgUrl,
    instructions,
    title,
    category,
    id,
  } = inProgressRecipe;

  const [linkCopy, setLinkCopy] = useState(false);

  const handleLinkMessage = () => {
    setLinkCopy(true);
  };
  return (
    <div>
      <img
        src={ imgUrl }
        alt="Recipe"
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">
        { title }
      </h1>
      <h3 data-testid="recipe-category">
        { category }
      </h3>
      <IngredientsFormatter recipe={ inProgressRecipe } />
      <p data-testid="instructions">
        { instructions }
      </p>
      <button type="button" data-testid="finish-recipe-btn">
        Finalizar Receita
      </button>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => { handleShareBtn(); handleLinkMessage(); } }
      >
        <img src={ Share } alt="share button" />
      </button>
      { linkCopy && <LinkCopy /> }
      <ButtonFavoriteRecipe
        setFavorite={ setFavorite }
        favorite={ favorite }
        recipes={ inProgressRecipe }
      />
    </div>
  );
}

export default RecipesInProgress;
