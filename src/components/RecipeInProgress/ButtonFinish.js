import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { InProgressContext } from '../../context/InProgressDrinks';

export default function ButtonFinish(props) {
  const { recipe } = props;
  const { enableFinishBtn } = useContext(InProgressContext);
  const history = useHistory();

  const handleClick = (callback) => {
    const {
      idDrink,
      idMeal,
      strArea,
      strCategory,
      strAlcoholic,
      strDrinkThumb,
      strMealThumb,
      strDrink,
      strMeal,
      strTags,
    } = recipe;

    const doneRecipe = {
      id: idDrink || idMeal,
      type: idDrink ? 'bebida' : 'comida',
      area: strArea,
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      image: strDrinkThumb || strMealThumb,
      doneDate: callback(),
      name: strDrink || strMeal,
      tags: strTags && strTags.split(','),
    };
    console.log(doneRecipe);

    // localStorage.setItem('doneRecipes', JSON.stringify(doneRecipe))
    // return history.push('/receitas-feitas');
  };

  return (
    <button
      type="button"
      data-testid="finish-recipe-btn"
      disabled={ !enableFinishBtn }
      onClick={ handleClick }
    >
      Finalizar Receita
    </button>
  );
}
