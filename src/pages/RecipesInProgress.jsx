import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { fetchFoodDetails, fetchDrinksDetails } from '../services/API';
import ingredientsMealDetails from '../helpers/ingredientsMealDetails';
import ingredientsDrinksDetails from '../helpers/ingredientsDrinkDetails';
import { setStorage, newDoneRecipe, getStorage } from '../helpers/Storage';

function RecipesInProgress() {
  const history = useHistory();
  const { location: { pathname } } = history;

  const [returnedDetail, setReturnedDetail] = useState([]);
  const [arrayIngredients, setArrayIngredients] = useState([]);
  const [doneRecipes] = useState(getStorage('doneRecipes'));
  const [typeFoods, setTypeFoods] = useState('');
  console.log(typeFoods);

  const addDoneRecipe = () => {
    const newDoneRecip = newDoneRecipe(returnedDetail, typeFoods);

    setStorage('doneRecipes', [...doneRecipes, newDoneRecip]);
  };

  const tres = 3;
  const saveRoute = pathname.split('/').slice(1, tres);
  const URL = saveRoute[0];
  const id = saveRoute[1];

  useEffect(() => {
    const foodDetails = async (recipeId) => {
      if (`/${URL}` === '/comidas') {
        const fetchedDetails = await fetchFoodDetails(recipeId);
        setReturnedDetail(fetchedDetails);
        setTypeFoods('comida');
      }
      if (`/${URL}` === '/bebidas') {
        const fetchedDetails = await fetchDrinksDetails(recipeId);
        setReturnedDetail(fetchedDetails);
        setTypeFoods('bebida');
      }
    };
    foodDetails(id);
  }, [URL, id]);

  useEffect(() => {
    if (`/${URL}` === '/comidas') {
      setArrayIngredients(ingredientsMealDetails(returnedDetail));
    }
    if (`/${URL}` === '/bebidas') {
      setArrayIngredients(ingredientsDrinksDetails(returnedDetail));
    }
  }, [returnedDetail, URL]);

  return (
    <div>
      <div className="container-recipe">
        <img
          data-testid="recipe-photo"
          alt="Thumb Recipe"
          src={ returnedDetail.strMealThumb }
          width="300px"
          height="300px"
        />
        <h3 data-testid="recipe-title">{returnedDetail.strMeal}</h3>
        <button type="button" data-testid="share-btn">Compartilhar</button>
        <button type="button" data-testid="favorite-btn">Favoritar</button>
        <p data-testid="recipe-category">{returnedDetail.strCategory}</p>
        { arrayIngredients.map((ingredient, index) => (
          <p data-testid={ `${index}-ingredient-step` } key={ index }>
            <input type="checkbox" key={ index } />
            {ingredient}
          </p>))}
        <p data-testid="instructions">{returnedDetail.strInstructions}</p>
        <Link to="/receitas-feitas">
          <button
            type="button"
            alt="Finish-Recipe"
            onClick={ addDoneRecipe }
            data-testid="finish-recipe-btn"
          >
            Finalizar Receita
          </button>
        </Link>
      </div>

    </div>
  );
}

export default RecipesInProgress;
