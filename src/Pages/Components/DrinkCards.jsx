import React from 'react';
import Context from '../../Context_Configs/Context';

export default function DrinkCards() {
  const { dataDrinks } = React.useContext(Context);
  return (
    <div>
      {
        dataDrinks !== null
          ? dataDrinks.map(({ strDrink, strDrinkThumb, idDrink }, index) => (
            <div data-testid={ `${index}-recipe-card` } key={ idDrink }>
              <h3 data-testid={ `${index}-card-name` }>{strDrink}</h3>
              <img
                src={ strDrinkThumb }
                data-testid={ `${index}-card-img` }
                alt="Imagem de comida"
              />
            </div>))
        // eslint-disable-next-line no-alert
          : alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')
      }
    </div>
  );
}
