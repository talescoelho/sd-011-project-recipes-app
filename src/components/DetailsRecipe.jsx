import React from 'react';

function DetailsRecipe(props) {
  const { recipeData } = props;
  const {
    ingredients,
    ingredientQuantity,
    imgUrl,
    instructions,
    title,
    video,
  } = recipeData;
  console.log(recipeData);
  return (
    <div>
      <img src={imgUrl} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}

export default DetailsRecipe;
