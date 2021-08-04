import React from 'react';
import Context from '../../Context_Configs/Context';

export default function FoodCategoryCards() {
  const { renderFoodCategory } = React.useContext(Context);

  /* async function requestFoodCategories({ target }) {
        const { value } = target;
        const meals = await CategoryFoodFilter(value);
        meals && setFoodFilter(meals.filter((item, index) => index <= 11));
      } */

  return (
    <div>
      {renderFoodCategory.map((food, index) => <div key={ index }>{food.strMeal}</div>)}
    </div>
  );
}
