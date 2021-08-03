import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MainContext from '../context/MainContext';

const DrinkDetails = (props) => {
  const { match: { params: { id } } } = props;
  const data = useContext(MainContext);
  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strInstructions,
  } = data.find((recipe) => recipe.idDrink === id);
  const ingredientsName = [];
  const ingredientMeasure = [];
  const maxIngredients = 20;

  function getIngredients() {
    for (let index = 1; index <= maxIngredients; index += 1) {
      ingredientsName.push(data
        .find((recipe) => recipe[`strIngredient${index}`]
          && recipe[`strIngredient${index}` !== '']));

      ingredientsMeasure.push(data
        .find((recipe) => recipe[`strMeasure${index}`]
        && recipe[`strMeasure${index}` !== '']));
    }
  }

  getIngredients();

  return (
    <section>
      <img data-testid="recipe-photo" src={ strDrinkThumb } alt={ strDrink } />
      <h2 data-testid="recipe-title">{ strDrink }</h2>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <h4 data-testid="recipe-category">{ strCategory }</h4>
      <ol>

        {
          ingredientsName.map((ingredient, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { `${ingredientsName}: ${ingredientMeasure}` }
            </li>
          ))
        }
      </ol>
      <p data-testid="instruction">{strInstructions}</p>
      <p data-testid={ `${index}-recomendation-card` } />
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </section>
  );
};

DrinkDetails.propTypes = {
  match: PropTypes.shape(PropTypes.any).isRequired,
};

export default DrinkDetails;
