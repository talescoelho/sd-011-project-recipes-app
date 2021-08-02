import React, { useEffect, useState } from 'react';

function MainRecipes({ foodOrDrink }) {
  const [mainItems, setMainItems] = useState();
  const [loading, setLoading] = useState(true);

  const maxLength = 12;

  function renderRecipes(item, index) {
    return (
      <div data-testid={ `${index}-recipe-card` } key={ index }>
        <img
          src={ foodOrDrink === 'Comidas' ? item.strMealThumb : item.strDrinkThumb }
          alt="food_image"
          data-testid={ `${index}-card-img` }
        />
        <p data-testid={ `${index}-card-name` }>
          {foodOrDrink === 'Comidas' ? item.strMeal : item.strDrink}
        </p>
      </div>
    );
  }

  async function fetchMainItem() {
    let endPoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    if (foodOrDrink === 'Bebidas') {
      endPoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    }
    const require = await fetch(endPoint);
    const response = await require.json();
    const data = foodOrDrink === 'Bebidas' ? response.drinks : response.meals;
    setMainItems(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchMainItem();
  }, []);

  return (
    <div>
      {loading ? <span>Carregando...</span> : (
        mainItems.filter((item, index) => index < maxLength).map(renderRecipes)
      )}
    </div>
  );
}

export default MainRecipes;
