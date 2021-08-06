import React, { useEffect, useContext/* , useState */ } from 'react';
import MainContext from '../Context/MainContext';

function onChange(event) {
  if (event.target.checked) {
    setSelected(selected + 1);
  } else {
    setSelected(selected - 1);
  }
  if (startButton && selected === DetailsIngredientsFiltered.length - 1) {
    setCount(true);
  } else {
    setCount(false);
  }
}

function Ingredients() {
  const {
    DetailsIngredientsFiltered,
    setDetailsIngredientsFiltered,
    DetailsMeasuresFiltered,
    setDetailsMeasuresFiltered,
    idFoodsAPI, startButton,
    count, /* setCount, */
    selected, /* setSelected, */
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

      setDetailsIngredientsFiltered(ingredientsFinal);
      setDetailsMeasuresFiltered(measuresFinal);
    }
  }, [idFoodsAPI, setDetailsIngredientsFiltered, setDetailsMeasuresFiltered]);

  // & teste====================================================================

  console.log(count);
  console.log(DetailsIngredientsFiltered.length);
  // & teste====================================================================

  return (
    <div>
      <ul>
        { !startButton && DetailsIngredientsFiltered.map((ing, i) => (
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
        )) }
      </ul>
      {/* //& ========================================================== */}
      <summary>
        {selected > 0 ? selected : null}
      </summary>
      <ul>
        { startButton && DetailsIngredientsFiltered.map((ing, i) => (
          <section
            key={ i }
            data-testid={ `${i}-ingredient-name-and-measure` }
          >
            <div className="toppings-list-item">
              <div className="left-section">
                <input
                  type="checkbox"
                  id={ ing }
                  name={ ing }
                  value={ ing }
                  onChange={ (event) => onChange(event) }
                />
                <label htmlFor={ ing }>
                  { ing }
                  {' '}
                  -
                  { ' ' }
                  { DetailsMeasuresFiltered.map((mea, ind) => i === ind && (mea)) }
                </label>
              </div>
            </div>
          </section>
        )) }
      </ul>
    </div>
  );
}

export default Ingredients;
