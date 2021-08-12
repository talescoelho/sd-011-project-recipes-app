import React, { useEffect } from 'react';
import { arrayOf, bool, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearProgress, setProgressDone } from
  '../../redux/actions/recipeProgressActions';

const ConcludeRecipe = ({
  addProgressDone,
  id,
  ingredients,
  recipeDone,
  recipeType,
  resetProgress }) => {
  useEffect(() => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgressRecipes[recipeType][id].length === ingredients.length) {
      addProgressDone();
    }
  }, [addProgressDone, id, ingredients.length, recipeType]);

  const handleClick = () => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    delete inProgressRecipes[recipeType][id];
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    resetProgress();
  };
  return (
    <Link
      to="/receitas-feitas"
    >
      <button
        id={ id }
        ingredients={ ingredients }
        onClick={ handleClick }
        recipeType={ recipeType }
        type="button"
        disabled={ !recipeDone }
      >
        Finalizar receita
      </button>
    </Link>
  );
};

const mapStateToProps = ({ recipeProgressReducer }) => ({
  recipeDone: recipeProgressReducer.done,
});

const mapDispatchToProps = (dispatch) => ({
  addProgressDone: () => dispatch(setProgressDone()),
  resetProgress: () => dispatch(clearProgress()),
});

ConcludeRecipe.propTypes = ({
  id: string,
  ingredients: arrayOf(string),
  recipeDone: bool,
  recipeType: string,
  resetProgress: func,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ConcludeRecipe);
