import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import RecipeContext from '../context/RecipesContext';
import ShareIcon from '../images/shareIcon.svg';
import whiteHearthIcon from '../images/whiteHeartIcon.svg';
import blackHearthIcon from '../images/blackHeartIcon.svg';
import { checkRecipeIsFavorited, removeFromFavorites,
  addRecipeInFavorites } from '../functions';

function ButtonsShareFav() {
  const { share, setShare, favIcon, setFavIcon,
    recipeDetail: recipe } = useContext(RecipeContext);
  const { href } = window.location;
  let link = href;
  if (href.includes('in-progress')) {
    link = href.replace('/in-progress', '');
  }
  const history = useHistory();
  const url = history.location.pathname;
  // acrescentar ao localstorage o estado do favIcon
  useEffect(() => {
    const ONE_SEC = 2000;
    const timeout = setInterval(() => {
      setShare(false);
    }, ONE_SEC);
    return () => clearInterval(timeout);
  }, [share]);

  // SetIcon on reload page
  useEffect(() => {
    if (checkRecipeIsFavorited(recipe.idMeal || recipe.idDrink)) {
      setFavIcon(true);
    } else {
      setFavIcon(false);
    }
  }, [recipe]);

  // Função para favoritar e desfavoritar
  const toggleClick = () => {
    console.log(url);
    if (!favIcon) {
      setFavIcon(true);
      addRecipeInFavorites(recipe, url);
    } else {
      setFavIcon(false);
      removeFromFavorites(recipe.idMeal || recipe.idDrink);
    }
  };

  return (
    <div className="buttons-actions">
      <div>
        <button
          className="button-fav-share my-2"
          type="button"
          onClick={
            () => { navigator.clipboard.writeText(link); setShare(!share); }
          }
        >
          <img data-testid="share-btn" src={ ShareIcon } alt="Share Icon" />
        </button>
        <button className="button-fav-share" type="button" onClick={ toggleClick }>
          <img
            data-testid="favorite-btn"
            src={ favIcon ? blackHearthIcon : whiteHearthIcon }
            alt="Fav Icon"
          />
        </button>
      </div>
      <div>
        { share && <p className="alert alert-success" role="alert">Link copiado!</p>}
      </div>
    </div>
  );
}

export default ButtonsShareFav;
