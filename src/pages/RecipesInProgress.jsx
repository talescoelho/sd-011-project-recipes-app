import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { apiDetailsId } from '../service/apiDetailsId';
import './styles/styleRecipesId.css';
import IngredientRecipes from '../components/IngredientRecipes';

function RecipesInProgress({ match }) {
  const { params, path } = match;
  const { id } = params;
  const typeDrinkorMeal = path.split('/')[1];
  const dispatch = useDispatch();

  const [detail, setDetail] = useState({
    idItem: 0,
    title: '',
    imgThumb: '',
    category: '',
    instructions: '',
    instructionsIT: '',
    update: true,
  });

  const { title, imgThumb, category,
    instructions } = detail;

  useEffect(() => {
    async function getApi() {
      dispatch(await apiDetailsId(
        typeDrinkorMeal === 'comidas' ? 'meals' : 'drinks', id,
      ));
    }
    getApi();
  }, [dispatch, id, typeDrinkorMeal]);

  return (
    <div>
      <img data-testid="recipe-photo" src={ imgThumb } alt={ title } />
      <h1 data-testid="recipe-title">{ title }</h1>
      <span data-testid="recipe-category">{ category }</span>
      <IngredientRecipes />
      <span data-testid="instructions">{ instructions }</span>
      <button
        className="buttonSart"
        type="button"
        data-testid="finish-recipe-btn"
      >
        Finalizar Receita
      </button>
    </div>
  );
}

export default RecipesInProgress;

RecipesInProgress.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
