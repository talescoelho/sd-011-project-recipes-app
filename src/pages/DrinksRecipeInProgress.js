import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../css/RecipeInProgress.css';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import RenderDrinkProgress from '../components/RenderDrinkProgress';

function DrinksRecipeInProgress({ match: { params: { id } } }) {
  const [drinkInProgress, setDrinkInProgress] = useState('');
  const [loading, setIsLoading] = useState(true);
  const [finalListIngredients, setFinalListIngredients] = useState();
  const [classNameIngredients, setClassNameIngredients] = useState([]);
  const [statusIngredients, setStatusIngredients] = useState([]);
  const [favoriteIcon, setFavoriteIcon] = useState(whiteHeartIcon);
  const [hasChecked, setHasChecked] = useState(false);
  const [statusEndRecipeButton, setStatusEndRecipeButton] = useState(true);
  const [countCheckIngredList, setCountCheckIngredList] = useState(0);
  const [numberIngredients, setNumberIngredients] = useState(0);
  const ingredListClass = [];
  const arrayStatus = [];

  useEffect(() => {
    const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

    const getDrinkDetails = async () => {
      const response = await fetch(endpoint);
      const data = await response.json();
      const { drinks } = data;
      setDrinkInProgress(drinks[0]);

      // Cria a Lista de Ingredientes + Arrays de Checked
      const ingredArray = Object.entries(drinks[0])
        .filter((key) => key[0].includes('strIngredient') && key[1]);
      const ingredList = [];
      ingredArray.forEach((item) => {
        ingredList.push(item[1]);
        ingredListClass.push('notChecked');
        arrayStatus.push(false);
      });
      setFinalListIngredients(ingredList);
      setNumberIngredients(ingredListClass.length);
      setStatusIngredients(arrayStatus);

      // Conta quantos checkbox foram marcados, e add estilo para aqueles marcados
      let countYesChecked = 0;
      let statusIngredSaved = [];
      statusIngredSaved = JSON.parse(localStorage.getItem('inProgressRecipes'));
      if (statusIngredSaved === null) statusIngredSaved = [];
      Object.values(statusIngredSaved).forEach((item, index) => {
        if (item) {
          countYesChecked += 1;
          ingredListClass[index] = 'yesChecked';
        }
      });
      setCountCheckIngredList(countYesChecked);
      setStatusIngredients(statusIngredSaved);

      // Lógica ver se aquela receita é ou não favorita, for favorita setFavoriteIcon(blackHeartIcon)
      let favoriteRecipes = [];
      favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      if (favoriteRecipes === null) favoriteRecipes = [];
      const isFavorite = favoriteRecipes.some((recipe) => recipe.id === id);
      if (isFavorite) setFavoriteIcon(blackHeartIcon);

      setClassNameIngredients(ingredListClass);
      setIsLoading(false);
    };
    getDrinkDetails();
  }, []);

  function renderComponentDrinkProgress() {
    return (
      <div>
        <RenderDrinkProgress
          strDrinkThumb={ drinkInProgress.strDrinkThumb }
          strDrink={ drinkInProgress.strDrink }
          strCategory={ drinkInProgress.strCategory }
          strInstructions={ drinkInProgress.strInstructions }
          id={ id }
          finalListIngredients={ finalListIngredients }
          classNameIngredients={ classNameIngredients }
          statusIngredients={ statusIngredients }
          statusEndRecipeButton={ statusEndRecipeButton }
          favoriteIcon={ favoriteIcon }
          setFavoriteIcon={ setFavoriteIcon }
          setHasChecked={ setHasChecked }
          setStatusIngredients={ setStatusIngredients }
          setClassNameIngredients={ setClassNameIngredients }
          setCountCheckIngredList={ setCountCheckIngredList }
          countCheckIngredList={ countCheckIngredList }
          numberIngredients={ numberIngredients }
          setStatusEndRecipeButton={ setStatusEndRecipeButton }
          hasChecked={ hasChecked }
          strAlcoholic={ drinkInProgress.strAlcoholic }
        />
      </div>
    );
  }

  return (
    <div>
      <span>
        { loading ? <p>Carregando...</p> : renderComponentDrinkProgress()}
      </span>
    </div>
  );
}

DrinksRecipeInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DrinksRecipeInProgress;
