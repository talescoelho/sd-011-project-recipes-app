import React from 'react';
import { CategoryFoodAPI, CategoryFoodFilter } from '../../services/CategoryFoodAPI';
import Context from '../../Context_Configs/Context';

export default function FoodCategory() {
  const numberFour = 4;
  const { setRenderFoodCategory, setFoodsForCategory } = React.useContext(Context);
  const [foodCategories, setFoodCategories] = React.useState();

  React.useEffect(() => {
    async function fetchFoodParamsButtons() {
      const CategoryFood = await CategoryFoodAPI();
      setFoodCategories(CategoryFood);
    }
    fetchFoodParamsButtons();
  }, []);

  async function requestFoodCategories({ target }) {
    const twelveItems = 12;
    const { value } = target;
    const meals = await CategoryFoodFilter(value);
    setFoodsForCategory(meals.filter((_, index) => index < twelveItems));
    setRenderFoodCategory(false);
  }

  return (
    <div>
      {
        foodCategories && foodCategories.filter((item, index) => index <= numberFour)
          .map((category, index) => (
            <button
              onClick={ (e) => requestFoodCategories(e) }
              type="button"
              key={ index }
              data-testid={ `${category}-category-filter` }
              name="category"
              value={ category }
            >
              {category}
            </button>
          ))
      }
    </div>
  );
}
