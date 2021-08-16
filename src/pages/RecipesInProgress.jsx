import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { setStorage, newDoneRecipe, getStorage } from '../helpers/Storage';
import ReturnRecipe from '../helpers/ReturnRecipe';
import ShareAndFavButtons from '../components/subcomponents/ShareAndFavButtons';
import { storageMeals, storageCocktails } from '../helpers/LocalStorageIngredients';

function RecipesInProgress() {
  const { id } = useParams();
  const history = useHistory();
  const { location: { pathname } } = history;
  const [returnedDetail, setReturnedDetail] = useState({});
  const [arrayIngredients, setArrayIngredients] = useState([]);
  const [doneRecipes] = useState(getStorage('doneRecipes'));
  const [typeFoods, setTypeFoods] = useState('');
  const [recipe, setRecipe] = useState('');
  const [inProgressRecipes, setInprogressRecipes] = useState();
  const [btnDoneRecipe, setBtnDoneRecipe] = useState(true);
  const [checkedIngredients, setCheckedIngredients] = useState([]);

  const addDoneRecipe = () => {
    const newDoneRecip = newDoneRecipe(returnedDetail, typeFoods);
    const saveLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    setStorage('doneRecipes', [...doneRecipes, newDoneRecip]);
    delete saveLocalStorage[recipe][id];
    setStorage('inProgressRecipes', saveLocalStorage);
  };

  useEffect(() => {
    const saveLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    setInprogressRecipes(saveLocalStorage);
  }, []);

  useEffect(() => {
    async function testtee() {
      const { fetchDetails, typeFood,
        recipeType, ingredientsList } = await ReturnRecipe(id, pathname);
      setReturnedDetail(fetchDetails);
      console.log(fetchDetails);
      setTypeFoods(typeFood);
      setRecipe(recipeType);
      setArrayIngredients(ingredientsList);
    }
    testtee();
  }, [pathname, id]);

  if (!localStorage.inProgressRecipes) {
    localStorage.setItem('inProgressRecipes',
      JSON.stringify({
        cocktails: {},
        meals: {},
      }));
  }

  function valueIngredients({ target }) {
    if (pathname.includes('comida')) {
      const savedata = ((storageMeals(pathname, target.id, id)));
      setCheckedIngredients(savedata);
    } else {
      const savedata = ((storageCocktails(pathname, target.id, id)));
      setCheckedIngredients(savedata);
    }
  }

  useEffect(() => {
    function disable() {
      if (checkedIngredients.length
        === arrayIngredients.length) {
        return false;
      }
      return true;
    }
    setBtnDoneRecipe(disable());
  }, [arrayIngredients, checkedIngredients]);

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
              onClick={ (e) => valueIngredients(e) }
              defaultChecked
            /> : <input
              id={ ingredient }
              type="checkbox"
              key={ index }
              onClick={ (e) => valueIngredients(e) }
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
          disabled={ btnDoneRecipe }
        >
          Finalizar Receita
        </button>
      </Link>
    </div>
  );
}

export default RecipesInProgress;
