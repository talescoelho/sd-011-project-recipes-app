import React from 'react';
import CategoryDrinksAPI from '../../services/CategoryDrinksAPI';

const numberFour = 4;

export default function DrinkCategoryButtons() {
  const [drinkCategories, setDrinkCategories] = React.useState();
  React.useEffect(() => {
    async function fetchDrinkParams() {
      const categoryDrink = await CategoryDrinksAPI();
      setDrinkCategories(categoryDrink);
    }
    fetchDrinkParams();
  }, []);

  return (
    <div>
      {drinkCategories && drinkCategories.filter((_, index) => index <= numberFour)
        .map((category, index) => (
          <button
            type="button"
            key={ index }
            data-testid={ `${category}-category-filter` }
          >
            {category}
          </button>
        ))}
    </div>
  );
}
