import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function ExploreIngredients({ foodOrDrink }) {
  const [ingredients, setIngredients] = useState();
  const [loading, setLoading] = useState(true);

  const maxLength = 12;

  async function fetchIngredients() {
    let endPoint = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    if (foodOrDrink === 'Bebidas') {
      endPoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
    }
    const request = await fetch(endPoint);
    const response = await request.json();
    const data = foodOrDrink === 'Comidas' ? response.meals : response.drinks;
    setIngredients(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchIngredients();
  }, []);

  return (
    <div>
      {loading ? <span>Carregando...</span> : (
        <div>
          {ingredients.filter((item, index) => index < maxLength)
            .map((item, index) => (
              <div key={ index } data-testid={ `${index}-ingredient-card` }>
                <img
                  src={ foodOrDrink === 'Comidas'
                    ? `https://www.themealdb.com/images/ingredients/${item.strIngredient}-Small.png`
                    : `https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}-Small.png` }
                  alt="Ingredient_img"
                  data-testid={ `${index}-card-img` }
                />
                <p data-testid={ `${index}-card-name` }>
                  {foodOrDrink === 'Comidas' ? item.strIngredient : item.strIngredient1}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default ExploreIngredients;

ExploreIngredients.propTypes = {
  foodOrDrink: PropTypes.string.isRequired,
};
