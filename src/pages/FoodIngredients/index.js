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
  const magicNumber = 10;
  const filteredData = data.filter((item, index) => index < magicNumber);

  return (
    <div>
      { filteredData.map((item, index) => {
        const { strIngredient } = item;
        return (
          <div key={ index }>
            <img src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient}-Small.png ` } alt={ strIngredient } />
            <h3>{strIngredient}</h3>
          </div>
        );
      }) }
    </div>
  );
};

export default FoodInProgress;
