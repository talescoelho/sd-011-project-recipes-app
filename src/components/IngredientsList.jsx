import React from 'react';
import PropTypes from 'prop-types';
// colocar o id de ingredientes do datatest
// Video so mostra para comidas - Pensar logca if
// colocar tratativa de que se não existir video ele não renderiza o Iframe

function IngredientsList({ meal }) {
  function ingredientListMaker() {
    const ingredients = [];
    const measure = [];
    Object.keys(meal).forEach((key, index) => {
      if (meal[`strIngredient${index}`]) ingredients.push(meal[`strIngredient${index}`]);
      if (meal[`strMeasure${index}`]) measure.push(meal[`strMeasure${index}`]);
    });
    console.log(ingredients);
    console.log(measure);
    console.log(meal);
    return ingredients.map((ingredient, index) => `${ingredient} - ${measure[index]}`);
  }

  return (
    <div>
      <h2>Ingredients</h2>
      {/* <p data-testid={ `${0}-ingredient-name-and-measure` }>
        Lista dos ingredientes - Fazer um map e colocar o index de cada no lugar no datatest. O map vai juntas os ingredientes em uma li ou em uma label para o checkbox
      </p> */}
      <ul>
        {ingredientListMaker().map((ingredient, index) => (
          <li key={ index }>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientsList;

IngredientsList.propTypes = {
  meal: PropTypes.objectOf(PropTypes.string).isRequired,
};
