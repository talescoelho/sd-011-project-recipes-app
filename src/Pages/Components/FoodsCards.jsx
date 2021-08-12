import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../Context_Configs/Context';

export default function FoodsCards() {
  const { dataFood } = useContext(Context);
  return (
    <div>
      {dataFood !== null
        ? dataFood.map(({ strMeal, strMealThumb, idMeal }, index) => (
          <Link to={ `/comidas/${idMeal}` } key={ strMeal }>
            <div
              data-testid={ `${index}-recipe-card` }
              className="container d-flex border"
            >
              <h3 data-testid={ `${index}-card-name` } className="d-flex align-items-center">{strMeal}</h3>
              <img
                className="container d-flex w-50 p-2"
                src={ strMealThumb }
                data-testid={ `${index}-card-img` }
                alt="Imagem de comida"
              />
            </div>
          </Link>
        ))
        // eslint-disable-next-line no-alert
        : alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')}
    </div>
  );
}
