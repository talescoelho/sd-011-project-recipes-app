import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { updateRecipeInProgress } from '../functions';

function IngredientList() {
  const { ingredientsListRecipe: ingredients } = useContext(RecipesContext);
  const [task, setTask] = useState({});
  const [checkedTask, setCheckedTask] = useState([]);
  const { pathname: url } = useLocation();
  const { id } = useParams();

  const toggleCheck = ({ target: { name, checked } }) => {
    const update = { ...task, [name]: checked };
    setTask(update);
    const checkList = Object.entries(update);
    const filtered = [];
    checkList.forEach((element) => {
      if (element[1]) filtered.push(element[0]);
    });
    updateRecipeInProgress(url, filtered, id);
  };

  const getRecipe = async () => {
    const recipeInProgress = await JSON.parse(localStorage.getItem('inProgressRecipes'))
    || {};
    const listChecked = recipeInProgress.meals[id] || recipeInProgress.cocktails[id];
    const reloadTasks = listChecked.reduce((acc, curr) => ({
      ...acc,
      [curr]: true,
    }), {});
    setTask(reloadTasks);
  };

  useEffect(() => {
    getRecipe();
  }, []);

  const renderListInProgress = () => (
    <>
      <h2 className="ingredient-title text-center">Ingredients</h2>
      <ul className="ingredient-list">
        {ingredients.map((item, index) => (
          <div key={ index }>
            <li>
              <label
                htmlFor={ item }
                data-testid={ `${index}-ingredient-step` }
                className={ task[item] ? 'checked' : '' }
              >
                <input
                  onClick={ toggleCheck }
                  className="mr-2"
                  type="checkbox"
                  name={ item }
                  id={ item }
                  checked={ task[item] }
                />
                {item}
              </label>
            </li>
          </div>
        ))}
      </ul>
    </>
  );

  const renderListToDetails = () => (
    <>
      <h2 className="ingredient-title text-center">Ingredients</h2>
      <ul className="ingredient-list">
        {ingredients.map((item, index) => (
          <li data-testid={ `${index}-ingredient-name-and-measure` } key={ index }>
            {item}
          </li>
        ))}
      </ul>
    </>
  );

  if (!url.includes('in-progress')) return renderListToDetails();
  if (url.includes('in-progress')) return renderListInProgress();
}

export default IngredientList;
