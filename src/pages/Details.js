import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function Details() {
  const { id } = useParams();
  const { mealsData } = useContext(RecipesContext);
  const singleMeal = mealsData.filter((meal) => meal.idMeal === id);
  const {
    strMealThumb: thumbnail,
    strMeal: name,
    strCategory: category,
  } = singleMeal[0] || [];

  console.log(singleMeal);
  return (
    <article>
      <div>
        <img data-testid="recipe-photo" src={ thumbnail } alt={ name } />
        <h2 data-testid="recipe-title">{ name }</h2>
        <p data-testid="recipe-category">{ category }</p>
        <div className="buttons">
          <button data-testid="share-btn" type="button">
            compartilhar
          </button>
          <button data-testid="favorite-btn" type="button">
            favoritar
          </button>
        </div>
      </div>
    </article>
  );
}

export default Details;
