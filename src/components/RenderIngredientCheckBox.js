import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setCheckBoxCounter } from '../redux/slices/fetchReceitas';

// Verificar se o id existe no objeto

function RenderIngredientCheckBox({ index, values, id }) {
  const { checkBoxCounter } = useSelector((state) => state.fetchReceitas);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState();
  const { pathname } = window.location;
  const recipeURL = pathname.split('/')[1];
  const recipeType = recipeURL === 'comidas' ? 'meals' : 'cocktails';

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('inProgressRecipes'))) {
      const newObject = { cocktails: {}, meals: {} };
      newObject[recipeType][id] = [];
      localStorage.setItem('inProgressRecipes',
        JSON.stringify(newObject));
    }
    if (!localStorage.inProgressRecipes.match(id)) {
      const newObject = { ...JSON.parse(localStorage.getItem('inProgressRecipes')) };
      newObject[recipeType][id] = [];
      localStorage.setItem('inProgressRecipes',
        JSON.stringify(newObject));
    }
    if (localStorage.getItem('inProgressRecipes')
      && Object.keys(JSON.parse(localStorage.getItem('inProgressRecipes'))[recipeType])
        .includes(id)) {
      setIsChecked(JSON.parse(localStorage.getItem('inProgressRecipes'))[recipeType][id]
        .includes(index));
    }
    setIsLoading(false);
  }, []);

  if (isLoading) return <p>Loading...</p>;

  function handleCheck() {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const recipeId = inProgressRecipes[recipeType][id] || [];

    let allCheckedIngredients = [...recipeId, index];

    if (isChecked) {
      allCheckedIngredients = allCheckedIngredients
        .filter((ingredient) => ingredient !== index);
    }

    const recipeToStorage = { ...inProgressRecipes[recipeType],
      [id]: allCheckedIngredients };
    const currentProgress = {
      ...inProgressRecipes,
      [recipeType]: recipeToStorage,
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(currentProgress));
    const newCheckedBoxesNumber = !isChecked ? checkBoxCounter + 1 : checkBoxCounter - 1;
    dispatch(setCheckBoxCounter(newCheckedBoxesNumber));
    setIsChecked(!isChecked);
  }

  // Vefiricar o porque do requisito não passar
  // if (!isChecked) { return (
  //   <label
  //     data-testid={ `${index}-ingredient-step` }
  //     htmlFor={ `${index}ingredients` }
  //   >
  //     <input
  //       name={ `${index}ingredients` }
  //       type="checkbox"
  //       key={ index }
  //       // checked={ isChecked }
  //       onClick={ handleCheck }
  //     />
  //     {values}
  //   </label>
  // )}

  return (
    <label
      data-testid={ `${index}-ingredient-step` }
      htmlFor={ `${index}ingredients` }
    >
      <input
        name={ `${index}ingredients` }
        className="checkboxIngredient"
        type="checkbox"
        key={ index }
        defaultChecked={ isChecked }
        onChange={ () => setIsChecked(!isChecked) }
        // checked={ isChecked }
        onClick={ handleCheck }
      />
      {values}
    </label>
  );
}

export default RenderIngredientCheckBox;

RenderIngredientCheckBox.propTypes = {
  index: PropTypes.string.isRequired,
  values: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
