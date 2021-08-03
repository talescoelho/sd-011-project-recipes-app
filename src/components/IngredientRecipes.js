import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import apiIngredients from '../service/apiIngredients';

const handleChange = (
  index, ingredientList, setIngredientList, ingredients,
) => {
  ingredientList[index][1] = !ingredientList[index][1];
  setIngredientList([...ingredientList]);
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const { idMeal, idDrink } = ingredients;
  if (idMeal) {
    inProgress.meals[idMeal] = ingredientList;
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
  } else {
    inProgress.cocktails[idDrink] = ingredientList;
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
  }
};

function IngredientRecipes() {
  // const { params, path } = match;
  // console.log(match);
  // const { id } = params;
  // const typeDrinkorMeal = path.split('/')[1];
  const dispatch = useDispatch();
  const { dataApi } = useSelector(({ ingredients }) => ingredients);
  console.log(dataApi);
  const { drinks } = dataApi;
  const { meals } = dataApi;

  const [ingredientList, setIngredientList] = useState({
    ingredients: 0,
    ingredient: [],
    update: true,
  });

  const { update, ingredient } = ingredientList;

  function getReduxMealsOrDrinks() {
    if (drinks !== undefined) {
      const { idDrink, strIngredient1, strIngredient2, strIngredient3, strIngredient4,
        strIngredient5, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5,
      } = drinks[0];
      setIngredientList({
        recipe: idDrink,
        ingredient: [
          `${strIngredient1} ${strMeasure1}`, `${strIngredient2} ${strMeasure2}`,
          `${strIngredient3} ${strMeasure3}`, `${strIngredient4} ${strMeasure4}`,
          `${strIngredient5} ${strMeasure5}`],
        update: false,
      });
    }
    if (meals !== undefined) {
      const { idMeal, strIngredient1, strIngredient2, strIngredient3, strIngredient4,
        strIngredient5, strIngredient6, strIngredient7, strIngredient8, strMeasure1,
        strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7,
        strMeasure8 } = meals[0];
      setIngredientList({
        recipe: idMeal,
        ingredient: [
          `${strIngredient1} ${strMeasure1}`, `${strIngredient2} ${strMeasure2}`,
          `${strIngredient3} ${strMeasure3}`, `${strIngredient4} ${strMeasure4}`,
          `${strIngredient5} ${strMeasure5}`, `${strIngredient6} ${strMeasure6}`,
          `${strIngredient7} ${strMeasure7}`, `${strIngredient8} ${strMeasure8}`],
        update: false,
      });
    }
  }

  if (update === true) {
    getReduxMealsOrDrinks();
  }

  useEffect(() => {
    async function getApi(mealOrDrink, id) {
      dispatch(await apiIngredients(
        mealOrDrink === 'comidas' ? 'meals' : 'drinks', id,
      ));
      console.log(apiIngredients);
    }
    getApi();
  }, [dispatch]);

  return (
    <div>
      <h2>Ingredients</h2>
      { ingredientList ? ingredientList.map((ingredients, index) => (
        <div key={ ingredients } data-testid={ `${index}-ingredient-step` }>
          <label key={ ingredients[0] } htmlFor={ ingredients[0] }>
            <input
              type="checkbox"
              checked={ ingredients[1] }
              key={ ingredients[0] }
              onChange={
                () => handleChange(index, ingredientList, setIngredientList, ingredient)
              }
            // data-testid={ `${index}-ingredient-step` }
            />
            { !ingredients[1] ? (
              <div>
                <p>
                  { ingredient[index] }
                </p>
                <p>{ ingredients[0] }</p>
              </div>
            )
              : (
                <div>
                  <p>
                    <s>
                      { ingredient[index] }
                    </s>
                  </p>
                  <p><s>{ ingredients[0] }</s></p>
                </div>) }
          </label>
        </div>
      )) : '' }
    </div>
  );
}

export default IngredientRecipes;

// IngredientRecipes.propTypes = {
//   match: PropTypes.oneOfType([PropTypes.object]).isRequired,
// };
