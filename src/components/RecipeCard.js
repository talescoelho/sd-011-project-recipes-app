import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainContext from '../context/MainContext';
import { searchBarFetchMeal } from '../services/theMealAPI';
import { searchBarFetchCockTail } from '../services/theCockTailAPI';

function RecipeCard({ recipe, index, test }) {
  const {
    strDrink,
    strDrinkThumb,
    strMeal,
    strMealThumb,
    idMeal,
    idDrink,
    strIngredient,
    strIngredient1,
  } = recipe;
  const { setData, setLoading } = useContext(MainContext);
  const title = strDrink || strMeal || strIngredient || strIngredient1;
  const thumb = strDrinkThumb || strMealThumb;
  const id = idMeal || idDrink;
  const path = idMeal ? `/comidas/${id}` : `/bebidas/${id}`;
  const ingredientThumb = strIngredient
    ? `https://www.themealdb.com/images/ingredients/${title}-Small.png`
    : `https://www.thecocktaildb.com/images/ingredients/${title}-Small.png`;
  const history = useHistory();

  function handleClick() {
    if (strIngredient) {
      setLoading(true);
      searchBarFetchMeal(title, 'ingredient')
        .then((result) => {
          setData(result);
          setLoading(false);
          history.push('/comidas');
        });
    } else if (strIngredient1) {
      setLoading(true);
      searchBarFetchCockTail(title, 'ingredient')
        .then((result) => {
          setData(result);
          setLoading(false);
          history.push('/bebidas');
        });
    } else history.push(path);
  }

  return (
    <div
      aria-hidden="true"
      data-testid={ `${index}-${test}-card` }
      onClick={ handleClick }
    >
      <img
        src={ (strIngredient || strIngredient1)
          ? ingredientThumb : thumb }
        alt={ title }
        data-testid={ `${index}-card-img` }
      />
      <h4
        data-testid={ `${index}-card-name` }
      >
        { title }
      </h4>
    </div>
  );
}

export default RecipeCard;

RecipeCard.propTypes = {
  recipe: PropTypes.shape(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  test: PropTypes.string.isRequired,
};
