import React from 'react';
import Context from '../../Context_Configs/Context';

export default function FoodCategoryCards() {
  const { foodsForCategory } = React.useContext(Context);
  return (
    <div>
      {foodsForCategory !== 0 && foodsForCategory.map(({ strMeal, strMealThumb }, i) => (
        <div data-testid={ `${i}-recipe-card` } key={ `${strMeal}-${i}` }>
          <h3 data-testid={ `${i}-card-name` }>{strMeal}</h3>
          <img
            src={ strMealThumb }
            data-testid={ `${i}-card-img` }
            alt="Imagem de comida"
          />
        </div>
      ))}
    </div>
  );
}
