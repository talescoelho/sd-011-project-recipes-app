import React from 'react';
import useFetch from '../../hooks/useFetch';

const FoodInProgress = () => {
  const { data, request } = useFetch();

  React.useEffect(() => {
    request('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  }, [request]);

  if (!data) {
    return null;
  }
  console.log(data);
  const magicNumber = 12;
  const filteredData = data.meals.filter((item, index) => index < magicNumber);

  return (
    <div>
      { filteredData.map((item, index) => {
        const { strIngredient } = item;
        return (
          <div key={ index } data-testid={ `${index}-ingredient-card` }>
            <img
              src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient}-Small.png ` }
              alt={ strIngredient }
              data-testid={ `${index}-card-img` }
            />
            <h3 data-testid={ `${index}-card-name` }>{strIngredient}</h3>
          </div>
        );
      }) }
    </div>
  );
};

export default FoodInProgress;
