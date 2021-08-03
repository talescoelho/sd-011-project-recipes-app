import React from 'react';
import '../styles/RecipeConcluded.css';

function RecipeConcluded({ recipe }) {
  const { id, type, area, category, image, name, tags } = recipe;
  console.log(recipe);
  return (
    <div className="RecipeConcludedContainer">
      <img src={ image } alt="Recipe" />
      <div className="RecipeInfoConcluded">
        <span>
          { area }
        </span>
        <span>
          { category }
        </span>
        <p className="RecipesFoodName">{ name }</p>
        <p>Feita em: 10/06/2019</p>
      </div>
    </div>
  );
}

export default RecipeConcluded;
