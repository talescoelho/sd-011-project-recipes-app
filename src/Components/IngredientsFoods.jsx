import React, { useEffect, useContext } from 'react';
import MainContext from '../Context/MainContext';

function Ingredients() {
  const {
    DetailsIngredientsFiltered,
    setDetailsIngredientsFiltered,
    DetailsMeasuresFiltered,
    setDetailsMeasuresFiltered,
    idFoodsAPI,
  } = useContext(MainContext);

  useEffect(() => {
    if (idFoodsAPI) {
      Object.entries(idFoodsAPI).forEach((o) => (
        o[1] === null || o[1] === '' || o[1] === ' ' ? delete idFoodsAPI[o[0]] : 0));

      const listIngredients = Object.entries(idFoodsAPI)
        .filter((recipe) => recipe[0].includes('Ingredient') && recipe[1]);
      const ingredientsFinal = listIngredients.map((valor) => valor[1]);

      const listMeasures = Object.entries(idFoodsAPI || {})
        .filter((recipe) => recipe[0].includes('Measure') && recipe[1]);
      const measuresFinal = listMeasures.map((valor) => valor[1]);

      console.log(ingredientsFinal, measuresFinal);

      setDetailsIngredientsFiltered(ingredientsFinal);
      setDetailsMeasuresFiltered(measuresFinal);
    }
  }, [idFoodsAPI]);

  return (
    <div>
      <ul>
        { DetailsIngredientsFiltered.map((ing, i) => ((
          <li
            data-testid={ `${i}-ingredient-name-and-measure` }
            key={ i }
          >
            { ing }
            {' '}
            -
            { ' ' }
            { DetailsMeasuresFiltered.map((mea, ind) => i === ind && (mea)) }
          </li>
        ))) }
      </ul>
    </div>
  );
}

export default Ingredients;
