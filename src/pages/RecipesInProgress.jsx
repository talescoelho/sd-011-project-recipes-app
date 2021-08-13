import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { fetchFoodDetails, fetchDrinksDetails } from '../services/API';
import ingredients from '../helpers/ingredientsMealDetails';
import { setStorage, newDoneRecipe, getStorage } from '../helpers/Storage';
import ShareAndFavButtons from '../components/subcomponents/ShareAndFavButtons';

function RecipesInProgress() {
  const { id } = useParams();
  const history = useHistory();
  const { location: { pathname } } = history;
  const [returnedDetail, setReturnedDetail] = useState([]);
  const [doneRecipes] = useState(getStorage('doneRecipes'));
  const [typeFoods, setTypeFoods] = useState('');
  const [inProgress] = useState(getStorage('inProgressRecipes'));
  const [arrayIngredients, setArrayIngredients] = useState([]);

  const foods = pathname.includes('comidas');
  const drinks = pathname.includes('bebidas');

  const addDoneRecipe = () => {
    const newDoneRecip = newDoneRecipe(returnedDetail, typeFoods);
    setStorage('doneRecipes', [...doneRecipes, newDoneRecip]);
  };

  useEffect(() => {
    const foodDetails = async (recipeId) => {
      if (foods) {
        const fetchedDetails = await fetchFoodDetails(recipeId);
        setReturnedDetail(fetchedDetails);
        setTypeFoods('comida');
      }
      if (drinks) {
        const fetchedDetails = await fetchDrinksDetails(recipeId);
        setReturnedDetail(fetchedDetails);
        setTypeFoods('bebida');
      }
    };
    foodDetails(id);
  }, [id, foods, drinks]);

  useEffect(() => {
    if (foods) {
      setArrayIngredients(ingredients(returnedDetail));
    }
    if (drinks) {
      setArrayIngredients(ingredients(returnedDetail));
    }
  }, [id, foods, drinks, returnedDetail]);

  function handleCheckBox(ingredient) {
    return arrayIngredients.includes(ingredient)
      ? setArrayIngredients(arrayIngredients.filter((ing) => ing !== ingredient))
      : setArrayIngredients(arrayIngredients.concat(ingredient));
  }

  return (
    <div className="container-recipe">
      <img
        data-testid="recipe-photo"
        alt="Thumb Recipe"
        src={ returnedDetail.strMealThumb || returnedDetail.strDrinkThumb }
        width="360px"
        height="360px"
      />
      <h3 data-testid="recipe-title">
        { returnedDetail.strMeal || returnedDetail.strDrink}
      </h3>
      <ShareAndFavButtons details={ returnedDetail } />
      <p data-testid="recipe-category">{returnedDetail.strCategory}</p>
      { arrayIngredients.map((ingredient, index) => (
        <label
          htmlFor={ ingredient }
          data-testid={ `${index}-ingredient-step` }
          key={ index }
        >
          <input
            type="checkbox"
            key={ index }
            id={ ingredient }
            onChange={ () => handleCheckBox(ingredient) }
            checked={ arrayIngredients.includes(ingredient) }
          />
          {ingredient}
        </label>))}
      <p data-testid="instructions">{returnedDetail.strInstructions}</p>
      <Link to="/receitas-feitas">
        <button
          type="button"
          alt="Finish-Recipe"
          onClick={ addDoneRecipe }
          data-testid="finish-recipe-btn"
          disabled={ arrayIngredients.length === inProgress.length }
        >
          Finalizar Receita
        </button>
      </Link>
    </div>
  );
}

export default RecipesInProgress;
