import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { fetchFoodDetails, fetchDrinksDetails } from '../services/API';
import ingredientsMealDetails from '../helpers/ingredientsMealDetails';
import ingredientsDrinksDetails from '../helpers/ingredientsDrinkDetails';
import { setStorage, newDoneRecipe, getStorage } from '../helpers/Storage';
import ShareAndFavButtons from '../components/subcomponents/ShareAndFavButtons';

function RecipesInProgress() {
  const history = useHistory();
  const { location: { pathname } } = history;
  const [returnedDetail, setReturnedDetail] = useState([]);
  const [arrayIngredients, setArrayIngredients] = useState([]);
  const [doneRecipes] = useState(getStorage('doneRecipes'));
  const [typeFoods, setTypeFoods] = useState('');
  const [recipe, setRecipe] = useState('');
  const [inProgressRecipes, setInprogressRecipes] = useState();
  const { id } = useParams();

  const addDoneRecipe = () => {
    const newDoneRecip = newDoneRecipe(returnedDetail, typeFoods);
    setStorage('doneRecipes', [...doneRecipes, newDoneRecip]);
  };

  useEffect(() => {
    const saveLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    setInprogressRecipes(saveLocalStorage);
  }, []);

  useEffect(() => {
    const foodDetails = async (recipeId) => {
      if (pathname.includes('comidas')) {
        const fetchedDetails = await fetchFoodDetails(recipeId);
        setReturnedDetail(fetchedDetails);
        setTypeFoods('comida');
      }
      if (pathname.includes('bebidas')) {
        const fetchedDetails = await fetchDrinksDetails(recipeId);
        setReturnedDetail(fetchedDetails);
        setTypeFoods('bebida');
      }
    };
    foodDetails(id);
  }, [pathname, id]);

  useEffect(() => {
    if (pathname.includes('comidas')) {
      setArrayIngredients(ingredientsMealDetails(returnedDetail));
      setRecipe('meals');
    }
    if (pathname.includes('bebidas')) {
      setArrayIngredients(ingredientsDrinksDetails(returnedDetail));
      setRecipe('cocktails');
    }
  }, [pathname, returnedDetail]);

  if (!localStorage.inProgressRecipes) {
    localStorage.setItem('inProgressRecipes',
      JSON.stringify({
        cocktails: {},
        meals: {},
      }));
  }

  function teste(ingredient) {
    if (pathname.includes('bebidas')) {
      let newLocalStorageDrinks;
      const saveLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
      if (saveLocalStorage.cocktails[id]) {
        newLocalStorageDrinks = { cocktails: { ...saveLocalStorage.cocktails,
          [id]: [...saveLocalStorage.cocktails[id], ingredient],
        },
        meals: { ...saveLocalStorage.meals },
        };
      } else {
        newLocalStorageDrinks = {
          cocktails: { ...saveLocalStorage.cocktails,
            [id]: [ingredient],
          },
          meals: { ...saveLocalStorage.meals },
        };
      }
      localStorage.setItem('inProgressRecipes', JSON.stringify(newLocalStorageDrinks));
    }
    if (pathname.includes('comidas')) {
      let newLocalStorageMeals;
      const saveLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
      if (saveLocalStorage.meals[id]) {
        newLocalStorageMeals = {
          cocktails: {
            ...saveLocalStorage.cocktails,
          },
          meals: { ...saveLocalStorage.meals,
            [id]: [...saveLocalStorage.meals[id], ingredient],
          },
        };
      } else {
        newLocalStorageMeals = { cocktails: {
          ...saveLocalStorage.cocktails,
        },
        meals: {
          ...saveLocalStorage.meals,
          [id]: [ingredient],
        },
        };
      }
      localStorage.setItem('inProgressRecipes', JSON.stringify(newLocalStorageMeals));
    }
  }

  function checkedIngredients({ target }) {
    teste(target.id);
  }

  // function disable() {
  //   if (localStorage.inProgressRecipes[recipe][id]
  //     && localStorage.inProgressRecipes[recipe][id].length
  //     === arrayIngredients.length) {
  //     console.log('oi');
  //     return true;
  //   }
  //   console.log('ola');
  //   return false;
  // }

  const negado = false;

  return (
    <div className="container-recipe">
      <img
        data-testid="recipe-photo"
        alt="Thumb Recipe"
        src={ pathname.includes('comidas')
          ? returnedDetail.strMealThumb
          : returnedDetail.strDrinkThumb }
        width="360px"
        height="360px"
      />
      <h3 data-testid="recipe-title">
        { pathname.includes('comidas')
          ? returnedDetail.strMeal
          : returnedDetail.strDrink}
      </h3>
      <ShareAndFavButtons details={ returnedDetail } />
      <p data-testid="recipe-category">{returnedDetail.strCategory}</p>
      { arrayIngredients.map((ingredient, index) => (
        <label
          htmlFor={ ingredient }
          data-testid={ `${index}-ingredient-step` }
          key={ index }
        >
          {(!!inProgressRecipes[recipe][id] && inProgressRecipes[recipe][id]
            .includes(ingredient)) ? <input
              id={ ingredient }
              type="checkbox"
              key={ index }
              onClick={ (e) => checkedIngredients(e) }
              defaultChecked
            /> : <input
              id={ ingredient }
              type="checkbox"
              key={ index }
              onClick={ (e) => checkedIngredients(e) }
            />}
          {ingredient}
        </label>))}
      <p data-testid="instructions">{returnedDetail.strInstructions}</p>
      <Link to="/receitas-feitas">
        <button
          type="button"
          alt="Finish-Recipe"
          onClick={ addDoneRecipe }
          data-testid="finish-recipe-btn"
          disabled={ negado }
        >
          Finalizar Receita
        </button>
      </Link>
    </div>
  );
}

export default RecipesInProgress;
