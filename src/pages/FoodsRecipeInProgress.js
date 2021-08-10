import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../css/RecipeInProgress.css';

function FoodsRecipeInProgress({ match: { params: { id } } }) {
  const [mealInProgress, setMealInProgress] = useState('');
  const [loading, setIsLoading] = useState(true);
  const [finalListIngredients, setFinalListIngredients] = useState();
  const [classNameIngredients, setClassNameIngredients] = useState([]);

  useEffect(() => {
    const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const getMealDetails = async () => {
      const response = await fetch(endpoint);
      const data = await response.json();
      const { meals } = data;
      setMealInProgress(meals[0]);

      // Cria a Lista de Ingredientes

      const ingredArray = Object.entries(meals[0])
        .filter((key) => key[0].includes('strIngredient'));
      const ingredList = [];
      ingredArray.forEach((item) => ingredList.push(item[1]));
      setFinalListIngredients(ingredList);

      // Faz um Array de Length igual o Length da Lista de ingredientes, só que cada elemento do array
      // É igual a uma string 'notChecked', que será a classe inicial dos checkboxs
      // O controle é feito pelo index, ingredList na posição X, tem uma classe ingredListClass na posição X

      const ingredListClass = [];
      ingredList.forEach((item) => {
        if (item !== null && item !== '') ingredListClass.push('notChecked');
      });

      setClassNameIngredients(ingredListClass);
      setIsLoading(false);
    };
    getMealDetails();
  }, []);

  function checkList(index) {
    if (classNameIngredients[index] === 'notChecked') {
      setClassNameIngredients((prev) => ({ ...prev, [index]: 'yesChecked' }));
    }
    if (classNameIngredients[index] === 'yesChecked') {
      setClassNameIngredients((prev) => ({ ...prev, [index]: 'notChecked' }));
    }
  }

  function createIngredArray() {
    const finalList = finalListIngredients.map((ingredient, index) => {
      if (ingredient !== '' && ingredient !== null) {
        return (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-step` }
            className={ classNameIngredients[index] }
          >
            {ingredient}
            <input
              type="checkbox"
              id={ index }
              onClick={ (event) => checkList(event.target.id) }
            />
          </li>
        );
      }
      return null;
    });
    return (
      <ul>{ finalList }</ul>
    );
  }

  function renderCardRecipe({ strMealThumb, strMeal, strCategory, strInstructions }) {
    return (
      <div>
        <img
          src={ strMealThumb }
          alt={ strMeal }
          width="360px"
          height="300px"
          data-testid="recipe-photo"
        />
        <h3 data-testid="recipe-title">{ strMeal }</h3>
        {' '}
        <br />
        <button type="button" data-testid="share-btn">Compartilhar</button>
        {' '}
        <br />
        <button type="button" data-testid="favorite-btn">Favoritar</button>
        {' '}
        <br />
        <p data-testid="recipe-category">{ strCategory }</p>
        <span>
          { createIngredArray() }
        </span>
        <p data-testid="instructions">{ strInstructions }</p>
        <button type="button" data-testid="finish-recipe-btn">Finalizar Receita</button>
      </div>
    );
  }

  return (
    <div>
      <span>{ loading ? <p>Carregando...</p> : renderCardRecipe(mealInProgress) }</span>
    </div>
  );
}

FoodsRecipeInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default FoodsRecipeInProgress;
