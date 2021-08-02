import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import getCategories from '../services/categoriesAPI';
import getCategory from '../services/categoryAPI';
import RecipeAppContext from '../context/RecipeAppContext';

function CategoryButtons({ foods, drinks }) {
  const { setFoodCategory,
    setDrinkCategory,
    drinkCategoryList,
    foodCategoryList,
    setFoodList,
    setToggleOn,
    toggleOn,
  } = useContext(RecipeAppContext);

  useEffect(() => {
    const foodCatEndpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    const drinkCatEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    if (foods) {
      const getCategoriesFromAPI = async () => {
        const { meals } = await getCategories(foodCatEndpoint);
        setFoodCategory(meals);
      };
      getCategoriesFromAPI();
    } else if (drinks) {
      const getCategoriesFromAPI = async () => {
        const data = await getCategories(drinkCatEndpoint);
        const drinkCategory = data.drinks;
        setDrinkCategory(drinkCategory);
      };
      getCategoriesFromAPI();
    }
  }, []);

  const filterCategory = async ({ target }) => {
    const { name } = target;
    const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`;
    if (!toggleOn) {
      const data = await getCategory(endpoint);
      setFoodList(data.meals);
      setToggleOn(true);
    } if (toggleOn) {
      setToggleOn(false);
    }
  };

  const renderCategoryButton = (type) => {
    const maxLength = 4;
    const list = type.map((category, index) => {
      if (index <= maxLength) {
        return (
          <button
            type="button"
            key={ index }
            name={ category.strCategory }
            data-testid={ `${category.strCategory}-category-filter` }
            onClick={ (e) => filterCategory(e) }
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
