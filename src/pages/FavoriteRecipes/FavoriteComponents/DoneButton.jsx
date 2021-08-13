import PropTypes from 'prop-types';
import React from 'react';
import whiteHeart from '../../../images/whiteHeartIcon.svg';
import blackHeart from '../../../images/blackHeartIcon.svg';

function DoneButton({ index, id, setDoneRecipes }) {
  const [favorite, setFavorite] = React.useState(true);

  const doneBttnHandle = (param) => {
    setFavorite(false);
    const prevDoneRecipesStorage = JSON.parse(localStorage.getItem('DoneRecipes'));
    const newDoneRecipesStorage = prevDoneRecipesStorage && prevDoneRecipesStorage
      .filter((storage) => storage.id !== param);
    localStorage.setItem('doneRecipes', JSON.stringify(newDoneRecipesStorage));
    setDoneRecipes(newDoneRecipesStorage);
  };

  return (
    <button
      type="button"
      onClick={ () => doneBttnHandle(id) }
    >
      <img
        src={ !favorite ? whiteHeart : blackHeart }
        alt="share"
        data-testid={ `${index}-horizontal-favorite-btn` }
      />
    </button>
  );
}

DoneButton.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  setDoneRecipes: PropTypes.func.isRequired,
};

export default DoneButton;
