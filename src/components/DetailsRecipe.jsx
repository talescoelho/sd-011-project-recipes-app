import React from 'react';
import Ingredients from '../components/Ingredients';

function DetailsRecipe(props) {
  const { recipeData } = props;
  const {
    ingredients,
    ingredientsQuantity,
    imgUrl,
    instructions,
    title,
    video,
  } = recipeData;
  console.log(props, 'la');
  return (
    <div>
      <img src={ imgUrl } alt={ title } />
      <h2>{title}</h2>
      <Ingredients
        ingredients={ ingredients }
        ingredientsQuantity={ ingredientsQuantity }
      />

    </div>
  );
}

export default DetailsRecipe;
