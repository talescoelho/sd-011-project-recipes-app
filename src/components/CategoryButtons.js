import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import getCategory from '../services/categoryAPI';
import RecipeAppContext from '../context/RecipeAppContext';

function CategoryButtons({ foods, drinks }) {
  const { setFoodCategory,
    setDrinkCategory,
    drinkCategoryList,
    foodCategoryList,
  } = useContext(RecipeAppContext);

  useEffect(() => {
    const foodCatEndpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    const drinkCatEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    if (foods) {
      const getCategoryFromAPI = async () => {
        const { meals } = await getCategory(foodCatEndpoint);
        setFoodCategory(meals);
      };
      getCategoryFromAPI();
    } else if (drinks) {
      const getCategoryFromAPI = async () => {
        const response = await getCategory(drinkCatEndpoint);
        const drinkCategory = response.drinks;
        setDrinkCategory(drinkCategory);
      };
      getCategoryFromAPI();
    }
  }, []);

  const renderCategoryButton = (type) => {
    const maxLength = 4;
    const list = type.map((category, index) => {
      if (index <= maxLength) {
        return (
          <button
            type="button"
            key={ index }
            data-testid={ `${category.strCategory}-category-filter` }
          >
            {`${category.strCategory}`}
          </button>
        );
      }
      return null;
    });
    return list;
  };

  return (
    <div>
      <button type="button">All</button>
      {drinks && drinkCategoryList && renderCategoryButton(drinkCategoryList)}
      {foods && foodCategoryList && renderCategoryButton(foodCategoryList)}
    </div>
  );
}

CategoryButtons.propTypes = {
  foods: PropTypes.bool.isRequired,
  drinks: PropTypes.bool.isRequired,
};

export default CategoryButtons;
