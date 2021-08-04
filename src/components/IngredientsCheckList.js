import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const currenteDate = () => {
  const date = new Date();
  return date.toLocaleString('pt-BR');
};

const mountObject = (data, recipeType) => {
  const myObject = {
    id: recipeType === 'meals' ? data.idMeal : data.idDrink,
    type: recipeType === 'meals' ? 'comida' : 'bebida',
    area: recipeType === 'meals' ? data.strArea : '',
    category: data.strCategory,
    alcoholicOrNot: recipeType === 'meals' ? '' : data.strAlcoholic,
    name: recipeType === 'meals' ? data.strMeal : data.strDrink,
    image: recipeType === 'meals' ? data.strMealThumb : data.strDrinkThumb,
    doneDate: currenteDate(),
    tags: data.strTags ? [data.strTags] : [],
  };
  return myObject;
};

export default function IngredientsCheckList({ recipeType, id, data }) {
  const [render, setrender] = useState(false);

  const setCheckLocalStorage = ({ target }) => {
    const inProgressRecipes = JSON.parse(localStorage.inProgressRecipes);
    const recipeTypeList = inProgressRecipes[recipeType];
    const ingredientList = recipeTypeList[id];
    const newIngredientList = ingredientList.map((ingredient) => {
      if (ingredient.name === target.name) {
        return {
          ...ingredient,
          check: !ingredient.check,
        };
      }
      return ingredient;
    });
    const newInProgressRecipes = {
      ...inProgressRecipes,
      [recipeType]: {
        ...recipeTypeList,
        [id]: newIngredientList,
      },
    };
    localStorage.inProgressRecipes = JSON.stringify(newInProgressRecipes);
    setrender(!render);
  };

  const verifyAllCheck = () => {
    let allCheck = true;
    const ingredientsList = JSON.parse(localStorage.inProgressRecipes)[recipeType][id];
    ingredientsList.forEach((ingrediet) => {
      if (ingrediet.check !== true) {
        allCheck = false;
      }
    });
    return allCheck;
  };

  const deleteFromInProgress = () => {
    const inProgressRecipes = JSON.parse(localStorage.inProgressRecipes);
    console.log(inProgressRecipes);
    delete inProgressRecipes[recipeType][id];
    localStorage.inProgressRecipes = JSON.stringify(inProgressRecipes);
  };

  const addToDoneRecipes = () => {
    const obj = mountObject(data, recipeType);
    if (localStorage.doneRecipes) {
      const doneRecipes = JSON.parse(localStorage.doneRecipes);
      const newDoneRecipes = [...doneRecipes, obj];
      localStorage.doneRecipes = JSON.stringify(newDoneRecipes);
    } else {
      localStorage.setItem('doneRecipes', JSON.stringify([obj]));
    }
  };

  const handleFinishClick = () => {
    deleteFromInProgress();
    addToDoneRecipes();
  };

  const list = JSON.parse(localStorage.inProgressRecipes)[recipeType][id];

  return (
    <>
      {list
        .map((ingredient, index) => (
          <label
            key={ index }
            data-testid={ `${index}-ingredient-step` }
            htmlFor={ ingredient.name }
          >
            <input
              type="checkbox"
              checked={ ingredient.check }
              name={ ingredient.name }
              onChange={ (e) => setCheckLocalStorage(e) }
            />
            <span className={ ingredient.check ? 'ingredientCheck' : '' }>
              {`${ingredient.name} ${ingredient.measure ? ingredient.measure : ''}`}
            </span>
          </label>
        ))}
      <p data-testid="instructions">{data.strInstructions}</p>
      <Link to="/receitas-feitas">
        <button
          onClick={ () => handleFinishClick() }
          data-testid="finish-recipe-btn"
          type="button"
          disabled={ !verifyAllCheck() }
        >
          Finalizar receita
        </button>
      </Link>
    </>
  );
}

IngredientsCheckList.propTypes = {
  list: PropTypes.array,
}.isRequired;
