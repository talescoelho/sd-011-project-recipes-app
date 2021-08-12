import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/RecipeMealProgress.css';
import RecipeMealProgressComp from '../components/RecipeMealProgressComp';

function RecipeMealProgress() {
  const [recipeProgress, setRecipeProgress] = useState({});
  const [isLoaded, setIsloaded] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const [ingredientChecked, setIngredientChecked] = useState([]);

  const history = useHistory();
  const { pathname } = history.location;
  const recipesSelectedId = pathname.split('/')[2];

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipesSelectedId}`)
      .then((response) => response.json())
      .then((data) => setRecipeProgress(data.meals[0]) || setIsloaded(true));
    if (JSON.parse(localStorage.getItem('recipesProgress')) !== null) {
      const recipesInProgress = JSON.parse(localStorage.getItem('recipesProgress'));
      const recipeIngredientsinProgress = recipesInProgress.filter(
        (recipe) => recipe.idMeal === recipesSelectedId,
      );
      if (recipeIngredientsinProgress.length > 0) {
        setIngredientChecked([...recipeIngredientsinProgress[0].ingredientChecked]);
      }
    }
    if (JSON.parse(localStorage.getItem('favoriteRecipes')) !== null) {
      const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const favoriteRecipesFiltered = favoriteRecipes.filter(
        (recipe) => recipe.id === recipesSelectedId,
      );
      setFavorited(favoriteRecipesFiltered.length > 0);
    }
  }, [recipesSelectedId]);

  useEffect(() => {
    const objIngredientsRecipes = {
      idMeal: recipesSelectedId,
      ingredientChecked,
    };
    const recipesInProgress = JSON.parse(localStorage.getItem('recipesProgress')) || [];
    const filteredRecipesInProgress = recipesInProgress.filter(
      (recipe) => recipe.idMeal !== recipesSelectedId,
    );
    const newArrayRecipes = [
      objIngredientsRecipes,
      ...filteredRecipesInProgress,
    ];
    localStorage.setItem('recipesProgress', JSON.stringify(newArrayRecipes));
  }, [ingredientChecked, recipesSelectedId]);

  const loading = <p>Loading...</p>;

  function returnIngredients() {
    return Object.entries(recipeProgress)
      .filter((ingredient) => ingredient[0].includes('strIngredient'))
      .filter((ingredienteNotNul) => ingredienteNotNul[1] !== ''
        && ingredienteNotNul[1] !== null)
      .map((item) => item[1]);
  }

  const checkBox = returnIngredients();

  function handleChangeCheck({ target }) {
    const { value } = target;
    if (!ingredientChecked.includes(value)) {
      setIngredientChecked((prevState) => ([
        ...prevState,
        value,
      ]));
    } else {
      const filteredIngredientes = ingredientChecked.filter(
        (ingredient) => ingredient !== value,
      );
      setIngredientChecked(filteredIngredientes);
    }
  }

  const propsMealProgress = {
    setFavorited,
    handleChangeCheck,
    checkBox,
    recipeProgress,
    ingredientChecked,
    favorited,
    recipesSelectedId,
  };

  return (
    <div>
      { isLoaded
        ? <RecipeMealProgressComp propsMealProgress={ propsMealProgress } />
        : loading }
    </div>
  );
}

export default RecipeMealProgress;
