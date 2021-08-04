import React from 'react';
import { CategoryFoodAPI } from '../../services/CategoryFoodAPI';
import Context from '../../Context_Configs/Context';
import {CategoryFoodFilter} from '../../services/CategoryFoodAPI'

export default function FoodCategory({ requestFoodCategories }) {
  const numberFour = 4;
  const {setDataFoods, setRequestFoodParams, requestFoodParams, renderFoodCategory, setRenderFoodCategory} = React.useContext(Context);
  const [foodCategories, setFoodCategories] = React.useState();

  React.useEffect(() => {
    async function fetchFoodParamsButtons() {
      const CategoryFood = await CategoryFoodAPI();
      setFoodCategories(CategoryFood);
    }
    fetchFoodParamsButtons();
  }, []);

  async function requestFoodCategories({ target }) {
    const { value } = target;
    const meals = await CategoryFoodFilter(value);
    setRenderFoodCategory(meals.filter((item, index) => index <= 11));
  }

  return (
    <div>
      {
        foodCategories && foodCategories.filter((item, index) => index <= numberFour)
          .map((category, index) => (
            <button
           //   onClick={ (e) => requestFoodCategories(e) }
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
