import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShareButton from '../Components/ShareButton';
import FavoriteButton from '../Components/FavoriteButton';
import './Styles/ProcessFoods.css';
import MyContext from '../Context/MyContext';

export default function ProcessFoods({ match: { params: { id } } }) {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [numberOfChecked, setNumberOfChecked] = useState(0);
  const { food, setFood } = useContext(MyContext);
  // const { inProgress, setInprogress } = useContext(MyContext);
  const { checkIngredients, setCheckIngredients } = useContext(MyContext);
  // const { allChecked, setAllChecked } = useContext(MyContext);

  // DidUpdate - Faz fetch trazendo a receita pelo id e seta o stado recipes com as receita
  useEffect(() => {
    const getApi = async () => {
      const endPoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      const response = await fetch(endPoint);
      const results = await response.json();
      const meals = results.meals[0];
      setRecipes(meals);
      setFood(meals);
    };
    getApi();
  }, []);
  // retorna o array com os ingredientes
  const ingredientsRecipe = () => {
    const arrayIngredientKids = Object.keys(recipes)
      .filter((item) => item
        .includes('strIngredient'));
    const newIngredient = [];
    arrayIngredientKids.forEach((key) => {
      if (recipes[key]) {
        newIngredient.push(recipes[key]);
      }
    });
    return newIngredient;
  };
  // retorna um array com as medidas de cada ingredientes
  const ingredientsMesure = () => {
    const arrayIngredientKids = Object.keys(recipes)
      .filter((item) => item
        .includes('strMeasure'));
    const ingredients2 = [];
    arrayIngredientKids.forEach((key) => {
      if (recipes[key]) {
        ingredients2.push(recipes[key]);
      }
    });
    return ingredients2;
  };
  // retorna a concatenação do retorno da função ingredientsMesure com ingredientsRecipe
  const concatIngredientWithMesure = () => {
    const newArray = [];
    for (let index = 0; index < ingredientsRecipe().length; index += 1) {
      newArray.push(`-${ingredientsRecipe()[index]} - ${ingredientsMesure()[index]}`);
    }
    return newArray;
  };

  function count(e) {
    if (e.target.checked === true) {
      setNumberOfChecked(numberOfChecked + 1);
    } else {
      setNumberOfChecked(numberOfChecked - 1);
    }
  }

  const handleChange = () => {
    const a = document.getElementsByClassName('count-checkboxes').length - 1;
    console.log(a, numberOfChecked);
    if (numberOfChecked === a) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  function checkedInputLocalStorage() {
    // busca todos os ingredientes e check inicialmente são falsos
    const allIngredients = recipes.length > 0 && recipes.map((ingredient) => ({
      name: ingredient[1],
      checked: false,
    }));
    setIngredients(allIngredients);
    // var states iniciais
    let recipesProcess = {
      cocktails: {},
      meals: {},
    };
    // check se existe essa chave no local storage === true  (seta para receipesProcess)
    if (localStorage.getItem('inProgressRecipes')) {
      recipesProcess = JSON.parse(localStorage.getItem('inProgressRecipes'));
    }
    // var state intermediarias
    let arrRecipesProcess = [];
    // check as respectivas chaves
    arrRecipesProcess = recipesProcess.meals[id];

    if (!arrRecipesProcess) {
      arrRecipesProcess = [];
    }
    // setCheckIngredients(arrRecipesProcess);
  }

  function setStage() {
    let recipesProcess = {
      cocktails: {},
      meals: {},
    };
    if (localStorage.getItem('inProgressRecipes')) {
      recipesProcess = JSON.parse(localStorage.getItem('inProgressRecipes'));
    }
    // const result = checkIngredients;
    // const resCheck = [];
    // result.forEach((element) => {
    //   if (element.checked) {
    //     resCheck.push(element.name);
    //   }
    // });
    // recipesProcess.meals[id] = resCheck;
    localStorage.setItem('inProgressRecipes', JSON.stringify(recipesProcess));
  }
  // Pega ingredientes que são checados se (true) mantem o estado
  // const confirmCheckedIngredient = ingredients.length > 0 && ingredients
  //   .map((ingredient, index) => {
  //     if (checkIngredients.name === index) {
  //       ingredient.checked = true;
  //       return ingredient;
  //     }
  //     setCheckIngredients(confirmCheckedIngredient);
  //     return ingredient;
  //   });


  useEffect(() => {
    checkedInputLocalStorage();
  }, []);

  return (
    <div>
      <img
        id="img-recipe"
        src={ recipes.strMealThumb }
        data-testid="recipe-photo"
        alt="Imagem da receita"
      />
      <h2 data-testid="recipe-title">{ recipes.strMeal }</h2>
      <ShareButton idRecipe={ `comidas/${recipes.idMeal}` } />
      <FavoriteButton
        id={ recipes.idMeal }
        type="comida"
        area={ recipes.strArea }
        category={ recipes.strCategory }
        name={ recipes.strMeal }
        alcoholicOrNot=""
        image={ recipes.strMealThumb }
      />
      <h3 data-testid="recipe-category">{ recipes.strCategory }</h3>
      <h3>Ingredients</h3>
      <ul>
        { concatIngredientWithMesure()
          .map((igredient, index) => (
            <label
              key={ index }
              data-testid={ `${index}-ingredient-step` }
              htmlFor={ igredient[index] }
            >
              <input
                className="count-checkboxes"
                type="checkbox"
                id={ igredient[index] }
                value={ igredient }
                onChange={ (e) => { handleChange(); count(e); setStage(); } }
              />
              {' '}
              { igredient }
            </label>)) }
      </ul>
      <h3 data-testid="instructions">Instructions</h3>
      <p>{recipes.strInstructions}</p>
      <Link to="/receitas-feitas">
        <button
          id="start-recipe-btn"
          className="start-recipe-btn"
          type="button"
          data-testid="finish-recipe-btn"
          disabled={ disabled }
        >
          Finalizar Receita
        </button>
      </Link>
    </div>
  );
}

ProcessFoods.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
