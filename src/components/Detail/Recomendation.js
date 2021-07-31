import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiRecomendation } from '../../service/apiDetailsId';

function Recomendation({ recomendInverse }) {
  const recomendationn = ['teste'];
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
    recomendationn.map((item, index) => (
      <span
        data-testid={ `${index}-recomendation-card` }
        key={ index }
      >
        { item }
      </span>
    ))
  );
}

export default Recomendation;
