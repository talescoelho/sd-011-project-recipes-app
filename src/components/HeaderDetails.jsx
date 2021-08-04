import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function HeaderDetails({ foodOrDrink }) {
  const { idDetails } = useContext(AppContext);
  const details = idDetails[0];

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ foodOrDrink === 'Comidas' ? details.strMealThumb : details.strDrinkThumb }
        alt="image_of_recipe"
      />
      <div>
        <h1 data-testid="recipe-title">
          {foodOrDrink === 'Comidas' ? details.strMeal : details.strDrink }
        </h1>
        <button type="button" data-testid="share-btn">
          <img
            src={ shareIcon }
            alt="Imagem do ícone de comportilhamento"
          />
        </button>
        <button type="button" data-testid="favorite-btn">
          <img
            src={ whiteHeartIcon }
            alt="Imagem do ícone de favorito"
          />
        </button>
      </div>
      <h3 data-testid="recipe-category">
        { foodOrDrink === 'Comidas'
          ? details.strCategory
          : details.strAlcoholic }
      </h3>
    </div>
  );
}

export default HeaderDetails;

HeaderDetails.propTypes = {
  foodOrDrink: PropTypes.string.isRequired,
};
