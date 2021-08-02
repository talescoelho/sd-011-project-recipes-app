import React from 'react';
import Header from '../../components/Header';
import useFetch from '../../hooks/useFetch';

const DrinkIngredients = () => {
  const { data, request } = useFetch();

  React.useEffect(() => {
    request('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
  }, [request]);

  if (!data) {
    return null;
  }
  console.log(data);
  const magicNumber = 12;
  const filteredData = data.drinks.filter((item, index) => index < magicNumber);

  return (
    <div>
      { filteredData.map((item, index) => {
        const { strIngredient1 } = item;
        return (
          <>
            <Header />
            <div key={ index } data-testid={ `${index}-ingredient-card` }>
              <img
                src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png ` }
                alt={ strIngredient1 }
                data-testid={ `${index}-card-img` }
              />
              <h3 data-testid={ `${index}-card-name` }>{strIngredient1}</h3>
            </div>
          </>
        );
      }) }
    </div>
  );
};

export default DrinkIngredients;
