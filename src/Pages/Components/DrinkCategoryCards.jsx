import React from 'react';
import Context from '../../Context_Configs/Context';

export default function DrinkCategoryCards() {
  const { drinksForCategory } = React.useContext(Context);
  return (
    <div>
      {drinksForCategory !== 0 && drinksForCategory.map(({ strDrink, strDrinkThumb }, i) => (
        <div data-testid={ `${i}-recipe-card` } key={ `${strDrink}-${i}` }>
          <h3 data-testid={ `${i}-card-name` }>{strDrink}</h3>
          <img
            src={ strDrinkThumb }
            data-testid={ `${i}-card-img` }
            alt="Imagem de comida"
          />
        </div>
      ))}
    </div>
  );
}
