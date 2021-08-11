import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getFoodsByID } from '../Services/ApiFood';

function FoodProgress(props) {
  const [foodById, setFoodById] = useState([]);
  const [foodIngredient, setFoodIngredient] = useState([]);
  const [button, setButton] = useState(false);
  const { match } = props;
  const { id } = match.params;

  async function fetchFoodsByID() {
    const foodByIdAPI = await getFoodsByID(id);
    setFoodById(foodByIdAPI.meals);
  }

  useEffect(() => {
    fetchFoodsByID();
  }, []);

  // console.log(foodById);

  useEffect(() => {
    foodById.forEach((ingredient) => {
      const data = [];
      const number = 15;
      Object.entries(ingredient).filter((item) => {
        for (let index = 0; index <= number; index += 1) {
          if (item.includes(`strIngredient${index}`) && item[1]) {
            data.push(Object.values(item).splice(1, 1));
          }
        }
        return data;
      });
      // console.log(data);
      setFoodIngredient(data);
    });
  }, [foodById]);

  function ingredientsChecked() {
    let sum = 0;
    const checkeds = document.getElementsByTagName('input');
    for (let index = 0; index < checkeds.length; index += 1) {
      if (checkeds[index].checked === true) {
        sum += 1;
        // console.log(sum);
        if (sum === checkeds.length) {
          setButton(true);
        } else setButton(false);
      }
    }
    return button;
  }

  function storageCheckeds({ name, checked }) {
    let recipe = JSON.parse(localStorage.getItem('inProgressRecipes')) || { meals: {
      [id]: [],
    } };

    if (!recipe.meals) {
      recipe = { ...recipe,
        meals: {
          [id]: [],
        },
      };
    }

    if (checked) {
      if (!!recipe.meals[id] === false) {
        const recipeMeal = { ...recipe,
          meals:
          { ...recipe.meals, [id]: [name] },
        };
        localStorage.setItem('inProgressRecipes',
          JSON.stringify(recipeMeal));
      } else {
        const recipeMeals = { ...recipe,
          meals:
           { ...recipe.meals, [id]: [...recipe.meals[id], name] } };
        localStorage.setItem('inProgressRecipes',
          JSON.stringify(recipeMeals));
      }
    } else {
      const removeLocaStorage = recipe.meals[id]
        .filter((ingredient) => ingredient !== name);
      const recipeIngredients = { ...recipe,
        meals:
        { ...recipe.meals, [id]: removeLocaStorage } };
      localStorage.setItem('inProgressRecipes',
        JSON.stringify(recipeIngredients));
    }
  }

  function allIngredientsFunction(value) {
    ingredientsChecked();
    storageCheckeds(value);
  }

  return (
    <div>
      { foodById.map((item, index) => (
        <div key={ index }>
          <img
            data-testid="recipe-photo"
            src={ item.strMealThumb }
            alt={ `Food ${item.strMeal}` }
            width="80"
          />
          <h2 data-testid="recipe-title">
            { item.strMeal }
          </h2>
          <h3 data-testid="recipe-category">
            { item.strCategory }
          </h3>
          <ul>
            {
              foodIngredient.map((ingredient, i) => (
                <li
                  data-testid={ `${i}-ingredient-step` }
                  key={ i }
                >
                  <label
                    htmlFor={ i }
                  >
                    <input
                      name={ Object.values(ingredient) }
                      id={ i }
                      type="checkbox"
                      onChange={ (e) => allIngredientsFunction(e.target) }
                    />
                    { Object.values(ingredient) }
                  </label>
                </li>
              ))
            }
          </ul>
          <p data-testid="instructions">
            { item.strInstructions }
          </p>
        </div>
      )) }
      <div>
        <Link to="/receitas-feitas">
          <button
            type="button"
            data-testid="finish-recipe-btn"
            disabled={ !button }
          >
            Finish
          </button>
        </Link>
        <button
          type="button"
          data-testid="favorite-btn"
        >
          Favorite
        </button>
        <button
          type="button"
          data-testid="share-btn"
        >
          Share
        </button>
      </div>
    </div>
  );
}

FoodProgress.propTypes = {
  match: PropTypes.object,
  params: PropTypes.shape({
    id: PropTypes.number,
  }),
}.isRequired;

export default FoodProgress;
