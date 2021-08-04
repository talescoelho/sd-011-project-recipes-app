import React from 'react';
import Context from '../../Context_Configs/Context';

export default function FoodsCards() {
  const { dataFood } = React.useContext(Context);
  return (
    <div>
      {dataFood !== null ? dataFood.map(({ strMeal, strMealThumb, idMeal }, index) => (
        <div data-testid={ `${index}-recipe-card` } key={ idMeal }>
          <h3 data-testid={ `${index}-card-name` }>{strMeal}</h3>
          <img
            src={ strMealThumb }
            data-testid={ `${index}-card-img` }
            alt="Imagem de comida"
          />
        </div>))
        // eslint-disable-next-line no-alert
        : alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')}
    </div>
  );
}
