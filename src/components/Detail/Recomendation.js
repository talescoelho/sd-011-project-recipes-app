import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { apiRecomendation } from '../../service/apiDetailsId';
import './cecomendadtion.css';

function Recomendation({ recomendInverse }) {
  const diapatch = useDispatch();
  const { recomendation } = useSelector(({ detailsId }) => detailsId);
  console.log(recomendation);
  useEffect(() => {
    async function getApiRecomendation() {
      diapatch(await apiRecomendation(recomendInverse));
    }
    getApiRecomendation();
  }, [diapatch, recomendInverse]);

  return (
    <div className="recomendations">
      { recomendation.map(({ strMealThumb, strMeal }, index) => (
        <div className="card" key={ index }>
          <img
            data-testid={ `${index}-recomendation-card` }
            src={ strMealThumb }
            alt={ strMeal }
          />
          <span
            data-testid={ `${index}-recomendation-title` }
          >
            { strMeal }
          </span>
        </div>
      )) }
    </div>
  );
}

export default Recomendation;

Recomendation.propTypes = {
  recomendInverse: PropTypes.string.isRequired,
};
