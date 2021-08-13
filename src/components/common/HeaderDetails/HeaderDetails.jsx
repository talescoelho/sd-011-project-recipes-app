import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';
import shareIcon from '../../../images/shareIcon.svg';
import whiteHeartIcon from '../../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../../images/blackHeartIcon.svg';
import './HeaderDetails.css';

const HeaderDetails = (
  {
    thumb,
    alt,
    category,
    favoriteFood,
    favoriteDrink,
    drinkOrFood,
  },
) => {
  const [favoriteTrue, setFavoriteTrue] = useState(false);
  const [message, setmessage] = useState(null);
  const [indexOfmessage, setIndexOfmessage] = useState(null);
  // const [storeFavorite, setStoreFavorite] = useState([]);

  const history = useHistory();
  useEffect(() => {
    const favoritedStore = localStorage.favoriteRecipes;
    if (favoritedStore) {
      const saveLocalStorage = JSON.parse(favoritedStore)
        .some((trueOrFalse) => history.location.pathname.includes(trueOrFalse.id));

      if (saveLocalStorage) {
        setFavoriteTrue(true);
      }
    }
  }, []);

  const favoriteRecipe = () => {
    const favoritedStore = JSON.parse(localStorage.favoriteRecipes);
    console.log(favoritedStore);
    const emptyObject = [];

    const favoriteRecipies = [{
      id: favoriteFood.idMeal || favoriteDrink.idDrink,
      type: drinkOrFood,
      area: favoriteFood.strArea || '',
      category: favoriteFood.strCategory || favoriteDrink.strCategory,
      alcoholicOrNot: '' || favoriteDrink.strAlcoholic,
      name: favoriteFood.strMeal || favoriteDrink.strDrink,
      image: favoriteFood.strMealThumb || favoriteDrink.strDrinkThumb,
    }];
    setFavoriteTrue((blackOrWhite) => !blackOrWhite);
    if (!favoriteTrue) {
      localStorage.favoriteRecipes = JSON.stringify(favoriteRecipies);
    }
    if (favoriteTrue) {
      favoritedStore.splice(0, 1);
      localStorage.favoriteRecipes = JSON.stringify(emptyObject);
    }
  };

  return (
    <header>
      {
        thumb
          ? (
            <img
              className="thumbMeal-style"
              src={ thumb }
              alt={ `showing ${alt} product` }
              data-testid="recipe-photo"
            />
          )
          : <h1>Carregando</h1>
      }
      <h4 data-testid="recipe-title">{alt}</h4>
      <h6 data-testid="recipe-category">{category}</h6>
      <button
        type="button"
      >
        <img
          data-testid="share-btn"
          src={ shareIcon }
          alt="Icon to share foods"
        />
      </button>
      <button
        type="button"
        onClick={ favoriteRecipe }
      >
        <img
          data-testid="favorite-btn"
          src={
            !favoriteTrue
              ? whiteHeartIcon
              : blackHeartIcon
          }
          alt="Icon to favorite foods"
        />
      </button>
    </header>
  );
};

const mapStateToProps = (state) => ({
  favoriteFood: state.recipeDetailsReducer.meal,
  favoriteDrink: state.recipeDetailsReducer.drink,
});

HeaderDetails.propTypes = ({
  thumb: PropTypes.img,
  alt: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
}).isRequired;

export default connect(mapStateToProps)(HeaderDetails);
